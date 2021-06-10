import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppComponent } from '../app.component';
import { CartFavoritesService, Product, } from '../cart-favorites.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products: any[] = []
  product!: any



  constructor(
    private route: ActivatedRoute,
    public cartFavoriteService: CartFavoritesService,
    private appComponent: AppComponent,
  ) { }

  ngOnInit(): void {
    this.appComponent.http.get<Product[]>('/assets/products-list.json').subscribe((todos) => {
      this.route.params.subscribe((params: Params) => {
        this.product = todos.find((p) => p.id === +params.id)
      })
    })
  }
}
