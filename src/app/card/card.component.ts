import { Component, OnInit } from '@angular/core';
import { CardFavoritesService } from '../card-Favorites.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public cardService: CardFavoritesService) { }

  ngOnInit(): void {
    //console.log("this is card", this.cardService.cardItem)
  }

}
