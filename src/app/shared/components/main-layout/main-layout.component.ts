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

  darkTheme(event: any) {
    if (document.body.style.cssText.includes('--text-color:#000')) {
      document.body.style.setProperty('--first-color', "#191919")
      document.body.style.setProperty('--second-color', "#272727")
      document.body.style.setProperty('--text-color', "#fff")
      document.body.style.setProperty('--body-color', "#000")
      event.target.parentNode.parentNode.parentNode.classList.remove("color-invert")
    } else {
      document.body.style.setProperty('--first-color', "#f0f2f5")
      document.body.style.setProperty('--second-color', "#c7c7c7")
      document.body.style.setProperty('--text-color', "#000")
      document.body.style.setProperty('--body-color', "#fbfbfd")
      event.target.parentNode.parentNode.parentNode.classList.add("color-invert")
    }
  }
}
