import { Component } from '@angular/core';
import { animateSearch, shakeIt } from '../../animations';
import { CartFavoritesService } from '../../service/cart-favorites.service';
import { ProductService } from '../../service/product.service';
import { SearchProductService } from '../../service/search-product.service';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [animateSearch, shakeIt]
})
export class MainLayoutComponent {
  searchState = 'start'
  searchProductStr = ''

  constructor(
    public cartFavoriteService: CartFavoritesService,
    public searchService: SearchProductService,
    public productService: ProductService,
  ) { }
  showSearch() {
    const searchInput = document.querySelector("#search-input-duplicate")
    searchInput?.classList.contains("show-search") ? searchInput?.classList.remove("show-search") : searchInput?.classList.add("show-search");
  }

  showBurgerMenu(event: any) {
    const filters = document.querySelector("#product-filter")
    const topIcons = document.querySelector("#top-bar_icons")
    if (topIcons?.classList.contains("show_top-icons") && event.target.offsetParent.classList.contains("open-burger")) {
      event.target.offsetParent.classList.remove("open-burger")
      topIcons?.classList.remove("show_top-icons")
    } else {
      event.target.offsetParent.classList.add("open-burger")
      topIcons?.classList.add("show_top-icons")
      filters?.classList.contains("showEl") ? filters?.classList.remove("showEl") : null;
    }
  }

  animate() {
    this.searchState = this.searchState === 'end' ? 'start' : 'end'
  }



  darkTheme(event: any) {
    //black theme
    if (document.body.style.cssText.includes('--text-color:#000')) {
      document.body.style.setProperty('--first-color', "#191919")
      document.body.style.setProperty('--second-color', "#272727")
      document.body.style.setProperty('--other-text-color', "#999999")
      document.body.style.setProperty('--third-color', "#313131")
      document.body.style.setProperty('--text-color', "#fff")
      document.body.style.setProperty('--body-color', "#000")
      document.body.style.setProperty('--button-lightness', "52%")

      event.target.parentNode.parentNode.parentNode.classList.remove("color-invert")
    }
    //white theme
    else {
      document.body.style.setProperty('--first-color', "#f0f2f5")
      document.body.style.setProperty('--second-color', "#c7c7c7")
      document.body.style.setProperty('--third-color', "#bfbfbf")
      document.body.style.setProperty('--text-color', "#000")
      document.body.style.setProperty('--other-text-color', "#4d4d53")
      document.body.style.setProperty('--body-color', "#fbfbfd")
      document.body.style.setProperty('--button-lightness', "60%")

      event.target.parentNode.parentNode.parentNode.classList.add("color-invert")
    }
  }
  scrollUp() {
    window.scroll(0, 0);
  }
}
