import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { CartFavoritesService } from '../shared/service/cart-favorites.service';
import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/service/product.service';
import { switchMap } from 'rxjs/operators';
import { SearchProductService } from '../shared/service/search-product.service';


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
    public searchService: SearchProductService,
    private location: Location,

  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.route.params.
      pipe(
        switchMap((params: Params) => {
          return this.productService.getById(params['id'])
        })
      ).subscribe((product: Product) => {
        this.product = product
      })
  }
  previousPage() {
    this.location.back()
  }
}
