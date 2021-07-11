import { AfterContentChecked, Component } from '@angular/core';
import { animateSearch } from '../../animations';
import { CartFavoritesService } from '../../service/cart-favorites.service';
import { SearchProductService } from '../../service/search-product.service';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [animateSearch]
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
