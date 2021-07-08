import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { CartFavoritesService } from '../../service/cart-favorites.service';
import { SearchProductService } from '../../service/search-product.service';
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
export class MainLayoutComponent implements AfterContentChecked {

  searchState = 'start'
  searchProductStr = ''

  constructor(
    public cartFavoriteService: CartFavoritesService,
    public searchService: SearchProductService
  ) { }

  animate() {
    this.searchState = this.searchState === 'end' ? 'start' : 'end'
  }
  ngAfterContentChecked() {
    this.searchService.searchProductStr = this.searchProductStr
  }

}
