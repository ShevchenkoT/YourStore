import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.form.reset()
    console.log(this.form.value);


  }

  // test() {
  //   this.productService.create({

  //     phoneName: "test phone",
  //     memory: 128,
  //     phoneColor: 'red',
  //     phonePriceUsd: 999,
  //     pictureUrl: 'someurl',
  //     numberOfProducts: 5,

  //   }).subscribe((resolve) => {
  //     console.log(resolve);

  //   })
  // }
}
