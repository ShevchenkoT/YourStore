import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from '../shared/interfaces';
import { MyValidators } from '../shared/my.validators';
import { CartFavoritesService } from '../shared/service/cart-favorites.service';
import { OrderService } from '../shared/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  form!: FormGroup;
  submitted = false

  constructor(
    public cartService: CartFavoritesService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(10), MyValidators.ifInt]),
      fullName: new FormControl('', [Validators.required,]),
      sendingType: new FormControl('', [Validators.required])
    });



  }

  onSubmit(): void {
    if (this.cartService.cartItem.length || this.cartService.cartItem.length !== 0) {
      this.submitted = true
      const formData: Order = {
        ...this.form.value,
        products: this.cartService.cartItem,
        orderDate: new Date()
      };

      this.orderService.create(formData).subscribe(() => {
        this.form.reset();
        this.cartService.clearCartList();
        this.cartService.totalPrice = 0;
        this.submitted = false
      })
    }
  }
}
