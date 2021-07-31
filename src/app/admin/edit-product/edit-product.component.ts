import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/shared/interfaces';
import { MyValidators } from 'src/app/shared/my.validators';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  form!: FormGroup
  submitted = false
  product!: Product
  testPicture!: string

  uSub!: Subscription

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productService.getById(params['id'])
      })
    ).subscribe((product: Product) => {
      this.product = product
      this.form = new FormGroup({
        phoneName: new FormControl(product.phoneName, [Validators.required]),
        memory: new FormControl(product.memory, [Validators.required]),
        phoneColor: new FormControl(product.phoneColor, [Validators.required]),
        phonePriceUsd: new FormControl(product.phonePriceUsd, [Validators.required, MyValidators.ifInt]),
        pictureUrl: new FormControl(product.pictureUrl, [Validators.required]),
        characteristicOfName: new FormArray([]),
        characteristicOfInfo: new FormArray([]),


      })

      let obj: { [index: string]: any } = product.characteristic
      Object.keys(obj as Object).map((key: string, index: any) => {
        this.addFeature(key, obj[key])
      })

      this.testImg()
    })
  }

  addFeature(chaName: string = '', chaInfo: string = '') {
    const newCharacteristicOfName = new FormControl(chaName, Validators.required);
    const newCharacteristicOfInfo = new FormControl(chaInfo, Validators.required);

    (this.form.get('characteristicOfName') as FormArray).push(newCharacteristicOfName);
    (this.form.get('characteristicOfInfo') as FormArray).push(newCharacteristicOfInfo);
  }
  getCharacteristicOfName() {
    return (this.form.get('characteristicOfName') as FormArray).controls;
  }
  getCharacteristicOfInfo() {
    return (this.form.get('characteristicOfInfo') as FormArray).controls;
  }
  remoteCharacteristic(idx: number) {
    (this.form.get('characteristicOfName') as FormArray).removeAt(idx);
    (this.form.get('characteristicOfInfo') as FormArray).removeAt(idx);
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    let newCharacteristic: any = {}
    if (this.form.value.characteristicOfName && this.form.value.characteristicOfInfo) {
      this.form.value.characteristicOfName.forEach((key: number, i: number) => newCharacteristic[key] = this.form.value.characteristicOfInfo[i])
    }
    this.submitted = true
    this.uSub = this.productService.update({
      ...this.product,
      phoneName: this.form.value.phoneName,
      memory: parseInt(this.form.value.memory),
      phoneColor: this.form.value.phoneColor,
      phonePriceUsd: parseInt(this.form.value.phonePriceUsd),
      pictureUrl: this.form.value.pictureUrl,
      characteristic: newCharacteristic
    })
      .subscribe(() => {
        this.submitted = false
      })
  }

  testImg() {
    this.testPicture = this.form.value.pictureUrl
  }


  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe
    }
  }
}
