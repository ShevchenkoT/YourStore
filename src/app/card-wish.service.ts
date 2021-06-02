import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { products } from './products-list';

@Injectable({
  providedIn: 'root'
})
export class CardWishService {
  counterWishProduct: number = 1
  wishItem: Array<any> = [{
    id:4,
    phoneName: "Iphone 12 Pro",
    memory: 512,
    phoneColor: "Gold",
    phonePriceUsd: 1299,
    pictureUrl:"assets/img/phones/12ProGold.png"
  }]

  counterCardProduct: number = 0
  cardItem: Array<any> = []

  addOneProductToWish(product: object) {
    this.wishItem.unshift(product)
    this.counterWishProduct++

    console.log(this.wishItem)//!
  }
  clearProductInWish() {
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
