import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/interfaces';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  form!: FormGroup

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      phoneName: new FormControl(null, [Validators.required]),
      memory: new FormControl(null, [Validators.required]),
      phoneColor: new FormControl(null, [Validators.required]),
      phonePriceUsd: new FormControl(null, [Validators.required]),
      pictureUrl: new FormControl(null, [Validators.required])
    })
  }
  submit() {
    if (this.form.invalid) {
      return
    }
    const newProduct: Product = {
      phoneName: this.form.value.phoneName,
      memory: parseInt(this.form.value.memory),
      phoneColor: this.form.value.phoneColor,
      phonePriceUsd: parseInt(this.form.value.phonePriceUsd),
      pictureUrl: this.form.value.pictureUrl
    }

    this.productService.create(newProduct).subscribe(() => {
      this.form.reset()
      console.log(newProduct);

    })
  }

}
