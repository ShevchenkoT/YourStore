
import { Component, OnInit } from '@angular/core';
import { CartFavoritesService } from './cart-favorites.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public cartFavoriteService: CartFavoritesService) { }

  ngOnInit() {

  }
}
