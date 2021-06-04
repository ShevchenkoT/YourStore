import { Component, OnInit } from '@angular/core';
import { CartFavoritesService } from '../cart-favorites.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartFavoritesService) { }

  ngOnInit(): void {

  }

}
