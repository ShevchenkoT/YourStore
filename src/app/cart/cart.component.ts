import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from '../shared/interfaces';
import { MyValidators } from '../shared/my.validators';
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
      sendingType: new FormControl('', [Validators.required])
    });

    const test: Order = {
      email: 'guy',
      fullName: 'hui',
      phoneNumber: 'k;l',
      sendingType: 'gyiu',
      products: [{
        id: "-Me4xz6kwMU-zu4xBRNp",
        memory: 256,
        numberOfProducts: 3,
        phoneColor: "Black",
        phoneName: "Iphone 11",
        phonePriceUsd: 799,
        pictureUrl: "assets/img/phones/11Black.png",
      },
      {
        id: "-Me4xz6kwMU-zu4xBRNp",
        memory: 256,
        numberOfProducts: 3,
        phoneColor: "Black",
        phoneName: "Iphone 11",
        phonePriceUsd: 799,
        pictureUrl: "assets/img/phones/11Black.png",
      }]
    }
  }

  onSubmit(): void {
    if (this.cartService.cartItem.length || this.cartService.cartItem.length !== 0) {
      const formData: Order = { ...this.form.value };
      formData.products = this.cartService.cartItem;
      console.log(formData);
      this.form.reset();
      this.cartService.clearCartList();
      this.cartService.totalPrice = 0;
    }
  }
}
