import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CartFavoritesService } from '../shared/service/cart-favorites.service';
import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/service/product.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: any;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public cartFavoriteService: CartFavoritesService,
  ) { }

  ngOnInit(): void {
    this.route.params.
      pipe(
        switchMap((params: Params) => {
          return this.productService.getById(params['id'])
        })
      ).subscribe((product: Product) => {
        this.product = product
      })
  }
}
