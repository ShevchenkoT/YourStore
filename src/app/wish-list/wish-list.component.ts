import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { CartFavoritesService } from '../shared/service/cart-favorites.service';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
  constructor(
    public favoriteService: CartFavoritesService,
    private location: Location,
  ) {
    window.scroll(0, 0);
  }

  previousPage(): void {
    this.location.back();
  }
}
