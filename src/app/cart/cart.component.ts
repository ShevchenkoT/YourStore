import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../my.validators';
import { CartFavoritesService } from '../shared/service/cart-favorites.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  form!: FormGroup;

  constructor(public cartService: CartFavoritesService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(10), MyValidators.ifInt]),
      fullName: new FormControl('', [Validators.required,]),
      sending: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.cartService.cartItem.length || this.cartService.cartItem.length !== 0) {
      const formData = { ...this.form.value };
      formData.products = this.cartService.cartItem;
      console.log(formData);
      this.form.reset();
      this.cartService.clearCartList();
      this.cartService.totalPrice = 0;
    }
  }
}
