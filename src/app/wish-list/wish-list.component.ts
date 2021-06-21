import { Component } from '@angular/core';
import { CartFavoritesService } from '../shared/service/cart-favorites.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
  constructor(public favoriteService: CartFavoritesService) { }
}
