import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { animateGetProduct, hideFilters, phoneModShowFilter } from '../shared/animations';
import { Product } from '../shared/interfaces';
import { CartFavoritesService } from '../shared/service/cart-favorites.service';
import { ProductService } from '../shared/service/product.service';
import { SearchProductService } from '../shared/service/search-product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [animateGetProduct, hideFilters, phoneModShowFilter]
})
export class ProductsComponent implements OnInit, OnDestroy {

  showAfterProduct = false

  currentState!: Array<string>

  countProduct = 10
  startProductList = 0
  productsAfterPipes = 10

  lowerPrice: string = '0';
  topPrice!: string
  maxPrice!: string


  nameCheck: Array<string> = [];
  memoryCheck: Array<string> = [];
  colorCheck: Array<string> = [];
  filterShow = ["show", "hide", "hide"]


  error = '';
  gSub!: Subscription

  showListBtn = 5
  showBackToFirstList = false
  showBackToLastList = false
  constructor(
    public cartFavoritesService: CartFavoritesService,
    public searchService: SearchProductService,
    public productService: ProductService,
  ) {
    setTimeout(() => {
      this.changeList(0)
    }, 800)

  }

  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(() => {
        this.maxPrice = this.topPrice = this.getMaxPrice(this.productService.product).toString()
        this.currentState = new Array(this.productService.product.length)
        this.currentState.fill('start')

      }, null, () => {
        setTimeout(() => {
          this.showAfterProduct = true

        }, 0)
      })
  }


  changeState(n: number) {
    this.filterShow[n] = this.filterShow[n] === "show" ? "hide" : "show"
  }

  blockDown(event: any) {
    if (this.lowerPrice > this.topPrice) {
      event.target.value = this.lowerPrice = this.topPrice
    }
  }

  blockUp(event: any) {
    if (this.lowerPrice > this.topPrice) {
      event.target.value = this.topPrice = this.lowerPrice
    }
  }

  getMaxPrice(products: Product[]): any {
    return Math.max(...products.map((p) => p.phonePriceUsd))
  }

  numSequence(n: number): Array<number> {
    return Array(8)//Array(Math.ceil(n));
  }


  changeList(i: number) {
    const listBtn = document.querySelectorAll(".dynamic-footer_button")//dynamic-footer_button
    listBtn.forEach((btn, id) => {
      id === i ? btn.classList.add('active') : btn.classList.remove('active')
      btn.classList.add('dynamic-footer_button_hide')
    })

    this.showBackToFirstList = i > 2 ? true : false
    this.showBackToLastList = i < listBtn.length - 3 ? true : false
    listBtn.forEach((btn, id) => {
      if (id >= i - 2 && id <= i + 2) {
        btn.classList.remove('dynamic-footer_button_hide')
      }
    })
    this.startProductList = +this.countProduct * i
  }

  resetFilters() {
    this.memoryCheck = []
    this.nameCheck = []
    this.colorCheck = []
    this.topPrice = this.getMaxPrice(this.productService.product).toString()
    this.lowerPrice = '0';
    this.searchService.searchProductStr = ""
    this.changeList(0)
  }

  turnRight(idx: number) {
    this.currentState[idx] = 'right'
    this.searchService.cartStateChange()

    setTimeout(() => {
      this.currentState[idx] = 'start'
    }, 400)
  }
  turnLeft(idx: number) {
    this.currentState[idx] = 'left'
    this.searchService.wishStateChange()

    setTimeout(() => {
      this.currentState[idx] = 'start'
    }, 400)
  }

  showFilters() {
    const filters = document.querySelector("#product-filter")
    const topIcons = document.querySelector("#top-bar_icons")
    const burgerBtn = document.querySelector("#burger-btn")
    const searchInput = document.querySelector("#search-input-duplicate")


    if (filters?.classList.contains("showEl")) {
      filters?.classList.remove("showEl")
    } else {
      filters?.classList.add("showEl")
      topIcons?.classList.contains("show_top-icons") ? topIcons?.classList.remove("show_top-icons") : null;
      burgerBtn?.classList.contains("open-burger") ? burgerBtn?.classList.remove("open-burger") : null;
      searchInput?.classList.contains("show-search") ? searchInput?.classList.remove("show-search") : null;
    }
  }


  ngOnDestroy() {
    if (this.gSub) {
      this.gSub.unsubscribe()
    }
  }
}
