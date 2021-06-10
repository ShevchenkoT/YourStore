import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CartFavoritesService, Product } from '../cart-favorites.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit {
  minPrice: number = 0
  maxPrice: number = 1000

  products: Product[] = []//products
  nameCheck: Product[] = []
  memoryCheck: Product[] = []
  colorCheck: Product[] = []

  constructor(
    public cartFavoritesService: CartFavoritesService,
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.appComponent.http.get<Product[]>('/assets/products-list.json').subscribe((todos) => this.products = todos)
  }

}
