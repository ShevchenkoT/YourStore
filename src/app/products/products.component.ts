import { Component, OnInit } from '@angular/core';
import { CartFavoritesService, Product } from '../cart-favorites.service';

import { products } from '../products-list'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit {
  minPrice: number = 0
  maxPrice: number = 1000

  products: Product[] = products
  nameCheck: Product[] = []
  memoryCheck: Product[] = []
  colorCheck: Product[] = []

  constructor(public cartFavoritesService: CartFavoritesService) { }

  ngOnInit(): void {

  }

}
