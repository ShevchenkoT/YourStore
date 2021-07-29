import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/interfaces';
import { MyValidators } from 'src/app/shared/my.validators';
import { ProductService } from 'src/app/shared/service/product.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit, OnDestroy {
  form!: FormGroup
  submitted = false
  testPicture!: string

  cSub!: Subscription

  constructor(
    public productService: ProductService,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      phoneName: new FormControl(null, [Validators.required]),
      memory: new FormControl(null, [Validators.required]),
      phoneColor: new FormControl(null, [Validators.required]),
      phonePriceUsd: new FormControl(null, [Validators.required, MyValidators.ifInt]),
      pictureUrl: new FormControl(null, [Validators.required]),
      characteristicOfName: new FormArray([]),
      characteristicOfInfo: new FormArray([])
    })

  }

  addFeature() {
    const newCharacteristicOfName = new FormControl('', Validators.required);
    const newCharacteristicOfInfo = new FormControl('', Validators.required);

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
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/admin', 'login'], {
        queryParams: {
          authFailed: true
        }
      })
      return
    }
    const newName = this.form.value.characteristicOfName
    console.log(newName);

    this.submitted = true
    const newProduct: Product = {
      phoneName: this.form.value.phoneName,
      memory: parseInt(this.form.value.memory),
      phoneColor: this.form.value.phoneColor,
      phonePriceUsd: parseInt(this.form.value.phonePriceUsd),
      pictureUrl: this.form.value.pictureUrl
    }

    this.cSub = this.productService.create(newProduct).subscribe(() => {
      this.form.reset()
      this.testPicture = ''
      this.submitted = false
    })
  }
  testImg() {
    this.testPicture = this.form.value.pictureUrl
  }

  ngOnDestroy() {
    if (this.cSub) {
      this.cSub.unsubscribe
    }
  }

}
