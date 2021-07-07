import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(
    private productService: ProductService,
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
        pictureUrl: new FormControl(product.pictureUrl, [Validators.required])
      })
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    this.submitted = true
    this.productService.update({
      ...this.product,
      phoneName: this.form.value.phoneName,
      memory: this.form.value.memory,
      phoneColor: this.form.value.phoneColor,
      phonePriceUsd: this.form.value.phonePriceUsd,
      pictureUrl: this.form.value.pictureUrl
    })
      .subscribe(() => {
        this.submitted = false
      })
  }
}
