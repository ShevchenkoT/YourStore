import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartFavoritesService, Product } from './cart-favorites.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: Product[] = []

  constructor(public cartFavoriteService: CartFavoritesService,
    public http: HttpClient

  ) { }

  ngOnInit() {

  }
}
