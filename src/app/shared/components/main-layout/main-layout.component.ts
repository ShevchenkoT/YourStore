import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CartFavoritesService } from '../../service/cart-favorites.service';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    trigger('search', [
      state('start', style({
        width: '60px',
      })),
      state('end', style({ width: '250px' })),
      transition('*<=>*', animate("600ms cubic-bezier(0.175, 0.500, 0.32, 1.275)"))
    ])
  ]
})
export class MainLayoutComponent {

  searchState = 'start'


  constructor(public cartFavoriteService: CartFavoritesService) { }

  animate() {
    this.searchState = this.searchState === 'end' ? 'start' : 'end'
  }


}
