import { Component, DoCheck, OnInit } from '@angular/core';
import { CardFavoritesService } from '../card-Favorites.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  constructor(public favoriteService: CardFavoritesService) { }

  ngOnInit(): void {

  }

}
