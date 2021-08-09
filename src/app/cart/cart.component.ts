import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs';
import { Order } from '../shared/interfaces';
import { MyValidators } from '../shared/my.validators';
import { CartFavoritesService } from '../shared/service/cart-favorites.service';
import { GeolocationService } from '../shared/service/geolocation.service';
import { OrderService } from '../shared/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  submitted = false
  locationSubmitted = false
  gSub!: Subscription
  constructor(
    public cartService: CartFavoritesService,
    private orderService: OrderService,
    private geolocationService: GeolocationService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(10), MyValidators.ifInt]),
      fullName: new FormControl(null, [Validators.required,]),
      sendingType: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required])
    });
  }

  previousPage() {
    this.location.back()
  }

  getGeolocation() {
    this.locationSubmitted = true
    navigator.geolocation.getCurrentPosition((locate) => {
      //!Debug
      //49.835663, 24.024150 lvov
      //locate.coords.latitude, locate.coords.longitude
      //49.863637, 23.444908 Mulda
      //49.932095, 23.578184 NYA
      this.gSub = this.geolocationService.getLocation(locate.coords.latitude, locate.coords.longitude).subscribe((loc) => {
        this.form.get('address')?.setValue(`${loc.address.country}, ${loc.address.village}, ${loc.address.postcode}`)
        this.form.get('address')?.setValue(
          `${loc.address.country ? loc.address.country : ''} ${loc.address.town ? loc.address.town : ''} ${loc.address.city ? loc.address.city : ''} ${loc.address.village ? loc.address.village : ''} ${loc.address.borough ? loc.address.borough : ''} ${loc.address.postcode ? loc.address.postcode : ''}`)
        this.locationSubmitted = false
      })
    })
  }

  onSubmit(): void {
    if (this.cartService.cartItem.length || this.cartService.cartItem.length !== 0) {
      this.submitted = true
      const formData: Order = {
        ...this.form.value,
        products: this.cartService.cartItem,
        orderStatus: 'processing',
        orderDate: new Date(),
        orderPrice: this.cartService.totalPrice
      };

      this.orderService.create(formData).subscribe(() => {
        this.form.reset();
        this.cartService.clearCartList();
        this.cartService.totalPrice = 0;
        this.submitted = false
      })
    }
  }

  resetForm() {
    this.cartService.totalPrice = 0
    this.form.reset();
  }

  ngOnDestroy() {
    if (this.gSub) {
      this.gSub.unsubscribe()
    }
  }
}
