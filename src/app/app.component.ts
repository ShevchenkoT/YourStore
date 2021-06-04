
import { Component, OnInit } from '@angular/core';
import { CardFavoritesService } from './card-Favorites.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(public cardFavoriteService: CardFavoritesService

  ) { }

  ngOnInit() {

  }
}
