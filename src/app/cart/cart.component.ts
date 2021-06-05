import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartFavoritesService } from '../cart-favorites.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  form!: FormGroup

  constructor(public cartService: CartFavoritesService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      fullName: new FormControl('', [Validators.required,]),
      products: new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.form);
    let formData = { ...this.form.value }
    console.log(formData)
    this.form.reset()
  }
}
