import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { animateGetProduct, hideFilters } from '../shared/animations';
import { Product } from '../shared/interfaces';
import { CartFavoritesService } from '../shared/service/cart-favorites.service';
import { ProductService } from '../shared/service/product.service';
import { SearchProductService } from '../shared/service/search-product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [animateGetProduct, hideFilters]
})
export class ProductsComponent implements OnInit, OnDestroy {
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


  constructor(
    public cartFavoritesService: CartFavoritesService,
    public searchService: SearchProductService,
    public productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(() => {
        this.maxPrice = this.topPrice = this.getMaxPrice(this.productService.product).toString()
        this.currentState = new Array(this.productService.product.length)
        this.currentState.fill('start')
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
    return Array(Math.ceil(n));
  }


  changeList(i: number) {
    this.startProductList = +this.countProduct * i
  }

  resetFilters() {
    this.memoryCheck = []
    this.nameCheck = []
    this.colorCheck = []
    this.topPrice = this.getMaxPrice(this.productService.product).toString()
    this.lowerPrice = '0';
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

  ngOnDestroy() {
    if (this.gSub) {
      this.gSub.unsubscribe()
    }
  }
}
