import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CardFavoritesService } from '../card-Favorites.service';

import { products } from '../products-list'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products = products
  product!: any
  constructor(
    private route: ActivatedRoute,
    public cardFavoriteService: CardFavoritesService,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.product = this.products.find((p) => p.id === +params.id)
    })
  }



}
