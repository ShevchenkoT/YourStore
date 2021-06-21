import { Component } from '@angular/core';
import { CartFavoritesService } from './cart-favorites.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public cartFavoriteService: CartFavoritesService) { }
}
