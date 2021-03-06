import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  countProductAfterPipes = 0;
  searchProductStr = '';

  cartState = 'start';
  wishState = 'start';

  cartStateChange(): void {
    this.cartState = 'shake';
    setTimeout(() => {
      this.cartState = 'start';
    }, 300);
  }
  wishStateChange(): void {
    this.wishState = 'shake';
    setTimeout(() => {
      this.wishState = 'start';
    }, 300);
  }
}
