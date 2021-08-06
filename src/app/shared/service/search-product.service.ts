import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  countProductAfterPipes: number = 0;
  searchProductStr = ''

  cartState = 'start'
  wishState = 'start'

  cartStateChange() {
    this.cartState = 'shake'
    setTimeout(() => {
      this.cartState = 'start'
    }, 300)
  }
  wishStateChange() {
    this.wishState = 'shake'
    setTimeout(() => {
      this.wishState = 'start'
    }, 300)
  }
}
