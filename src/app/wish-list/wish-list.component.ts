import { Component } from '@angular/core';
import { CartFavoritesService } from '../shared/service/cart-favorites.service';
import { Location } from '@angular/common';

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

  previousPage() {
    this.location.back()
  }
}
