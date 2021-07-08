import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/interfaces';
import { CartFavoritesService } from '../shared/service/cart-favorites.service';
import { ProductService } from '../shared/service/product.service';
import { SearchProductService } from '../shared/service/search-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  minPrice = 0;
  maxPrice = 1000;

  products: Product[] = [];
  nameCheck: Product[] = [];
  memoryCheck: Product[] = [];
  colorCheck: Product[] = [];
  error = '';

  constructor(
    public cartFavoritesService: CartFavoritesService,
    public searchService: SearchProductService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getAll()
      .subscribe((product: Product[]) => {
        this.products = product
      })
  }
}
