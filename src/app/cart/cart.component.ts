import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
export class CartComponent implements OnInit {

  form!: FormGroup;
  submitted = false

  constructor(
    public cartService: CartFavoritesService,
    private orderService: OrderService,
    private geolocationService: GeolocationService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(10), MyValidators.ifInt]),
      fullName: new FormControl('', [Validators.required,]),
      sendingType: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });
  }

  getGeolocation() {

    navigator.geolocation.getCurrentPosition((locate) => {
      //49.835663, 24.024150 lvov
      this.geolocationService.getLocation(locate.coords.latitude, locate.coords.longitude).subscribe((loc) => {
        this.form.get('address')?.setValue(`${loc.address.country}, ${loc.address.village}, ${loc.address.postcode}`)

        console.log(loc);
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
