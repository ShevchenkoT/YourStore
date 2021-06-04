import { Component, OnInit } from '@angular/core';
import { CardFavoritesService } from '../card-Favorites.service';

import { products } from '../products-list'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit {
  minPrice: number = 0
  maxPrice: number = 1000

  products = products
  nameCheck: Array<Object> = []
  memoryCheck: Array<Object> = []
  colorCheck: Array<Object> = []

  constructor(public cardFavoritesService: CardFavoritesService) { }

  ngOnInit(): void {

  }

}
