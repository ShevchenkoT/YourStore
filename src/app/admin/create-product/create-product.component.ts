import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/interfaces';
import { MyValidators } from 'src/app/shared/my.validators';
import { ProductService } from 'src/app/shared/service/product.service';
import { AlertService } from '../shared/services/alert.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  submitted = false;
  testPicture!: string;

  cSub!: Subscription;

  constructor(
    public productService: ProductService,
    private auth: AuthService,
    private router: Router,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.form = new FormGroup({
      phoneName: new FormControl(null, [Validators.required]),
      memory: new FormControl(null, [Validators.required]),
      phoneColor: new FormControl(null, [Validators.required]),
      phonePriceUsd: new FormControl(null, [Validators.required, MyValidators.ifInt]),
      pictureUrl: new FormControl(null, [Validators.required]),
      characteristicOfName: new FormArray([]),
      characteristicOfInfo: new FormArray([])
    });


  }

  addFeature(): void {
    const newCharacteristicOfName = new FormControl('', Validators.required);
    const newCharacteristicOfInfo = new FormControl('', Validators.required);

    (this.form.get('characteristicOfName') as FormArray).push(newCharacteristicOfName);
    (this.form.get('characteristicOfInfo') as FormArray).push(newCharacteristicOfInfo);
  }
  getCharacteristicOfName(): Array<any> {
    return (this.form.get('characteristicOfName') as FormArray).controls;
  }
  getCharacteristicOfInfo(): Array<any> {
    return (this.form.get('characteristicOfInfo') as FormArray).controls;
  }
  remoteCharacteristic(idx: number): void {
    (this.form.get('characteristicOfName') as FormArray).removeAt(idx);
    (this.form.get('characteristicOfInfo') as FormArray).removeAt(idx);
  }

  arrayFormErrors(): boolean {
    return !!this.getCharacteristicOfName().filter((obj) => obj.errors).length ||
      !!this.getCharacteristicOfInfo().filter((obj) => obj.errors).length;
  }
  arrayFormValid(): boolean {
    return !!this.getCharacteristicOfName()
      .filter(
        (obj) => obj.invalid && obj.touched
      ).length
      || !!this.getCharacteristicOfInfo()
        .filter(
          (obj) => obj.invalid && obj.touched
        ).length;
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/admin', 'login'], {
        queryParams: {
          authFailed: true
        }
      });
      return;
    }
    const newCharacteristic: any = {};
    if (this.form.value.characteristicOfName && this.form.value.characteristicOfInfo) {
      this.form.value.characteristicOfName
        .forEach((key: number, i: number) => newCharacteristic[key] = this.form.value.characteristicOfInfo[i]);
    }
    this.submitted = true;
    const newProduct: Product = {
      phoneName: this.form.value.phoneName,
      memory: parseInt(this.form.value.memory, 0),
      phoneColor: this.form.value.phoneColor,
      phonePriceUsd: parseInt(this.form.value.phonePriceUsd, 0),
      pictureUrl: this.form.value.pictureUrl,
      characteristic: newCharacteristic,
    };
    this.cSub = this.productService.create(newProduct).subscribe(() => {
      this.form.reset();
      (this.form.get('characteristicOfName') as FormArray).clear();
      (this.form.get('characteristicOfInfo') as FormArray).clear();
      this.testPicture = '';
      this.submitted = false;
    });
    this.alertService.success('Product is created');

  }
  testImg(): void {
    this.testPicture = this.form.value.pictureUrl;
  }

  ngOnDestroy(): void {
    if (this.cSub) {
      this.cSub.unsubscribe();
    }
  }

}
