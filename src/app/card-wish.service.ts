import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardWishService {
  counterWishProduct: number = 1
  wishItem: Array<any> = [{
    id: 4,
    phoneName: "Iphone 12 Pro",
    memory: 512,
    phoneColor: "Gold",
    phonePriceUsd: 1299,
    pictureUrl: "assets/img/phones/12ProGold.png"
  }]

  counterCardProduct: number = 0
  cardItem: Array<any> = []

  addOneProductToWish(product: object) {
    this.wishItem.unshift(product)
    this.counterWishProduct = this.wishItem.length
  }
  clearProductInWish() {
    this.wishItem = []
    this.counterWishProduct = this.wishItem.length
  }
  getCounterWishProduct() {
    return this.counterWishProduct
  }
  deleteProductFromWishes(product: any) {
    this.wishItem = this.wishItem.filter((p) => p !== product)
    this.counterWishProduct = this.wishItem.length
  }



  addOneProductToCard(product: any) {
    this.cardItem.unshift(product)
    this.counterCardProduct = this.cardItem.length
  }

  clearCounterProductInCard() {
    this.cardItem = []
    this.counterCardProduct = this.cardItem.length
  }
  getCounterCardProduct() {
    return this.counterCardProduct
  }
}
