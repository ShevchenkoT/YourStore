import { Component, OnInit } from '@angular/core';
import { CardWishService } from '../card-wish.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public cardService: CardWishService) { }

  ngOnInit(): void {
    console.log(this.cardService.cardItem)
  }

}
