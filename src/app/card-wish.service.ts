import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { products } from './products-list';

@Injectable({
  providedIn: 'root'
})
export class CardWishService {
  counterWishProduct: number = 0
  wishItem: Array<object>= []

  counterCardProduct: number = 0
  cardItem: Array<Object> = []

  addOneProductToWish(product: object) {
    this.wishItem.unshift(product)
    this.counterWishProduct++

    console.log(this.wishItem)//!
  }
  clearCounterProductInWish() {
    this.wishItem = []
    this.counterWishProduct = 0
  }
  getCounterWishProduct() {
    return this.counterWishProduct
  }


  addOneProductToCard(product: any) {
    this.cardItem.unshift(product)
    this.counterCardProduct++

    console.log(this.cardItem)//!
  }

  clearCounterProductInCard() {
    this.cardItem = []
    this.counterCardProduct = 0
  }
  getCounterCardProduct() {
    return this.counterCardProduct
  }
}
