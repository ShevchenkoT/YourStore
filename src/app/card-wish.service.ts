import { Injectable } from '@angular/core';


export interface Products {
  id: number,
  phoneName: string,
  memory: number,
  phoneColor: string,
  phonePriceUsd: number,
  pictureUrl: string,
  numberOfProducts: number
}


@Injectable({
  providedIn: 'root'
})
export class CardWishService {
  counterWishProduct: number = 1
  wishItem: Products[] = [{
    id: 4,
    phoneName: "Iphone 12 Pro",
    memory: 512,
    phoneColor: "Gold",
    phonePriceUsd: 1299,
    pictureUrl: "assets/img/phones/12ProGold.png",
    numberOfProducts: 1
  }]

  counterCardProduct: number = 0
  cardItem: Products[] = []

  addOneProductToWish(product: Products) {
    if (this.wishItem.includes(product)) {
      for (let prod of this.wishItem) {
        if (prod == product) {
          product.numberOfProducts++
        }
      }
    } else {
      product.numberOfProducts = 1;
      this.wishItem.unshift(product)
    }
    this.counterWishProduct = this.setCounterProduct(this.wishItem)
  }
  deleteOneProductInWish(product: Products) {
    if (product.numberOfProducts > 1) {
      for (let prod of this.wishItem) {
        if (prod == product) {
          product.numberOfProducts--
        }
      }
    } else {
      this.wishItem = this.wishItem.filter((prod) => prod != product)
    }
    this.counterWishProduct = this.setCounterProduct(this.wishItem)
  }
  clearProductInWish() {
    this.wishItem = []
    this.counterWishProduct = this.setCounterProduct(this.wishItem)
  }
  getCounterWishProduct() {
    return this.counterWishProduct
  }
  deleteProductFromWishes(product: any) {
    this.wishItem = this.wishItem.filter((p) => p !== product)
    this.counterWishProduct = this.setCounterProduct(this.wishItem)
  }







  addOneProductToCard(product: Products) {
    if (this.cardItem.includes(product)) {
      for (let prod of this.cardItem) {
        if (prod == product) {
          product.numberOfProducts++
        }
      }
    } else {
      product.numberOfProducts = 1;
      this.cardItem.unshift(product)
    }
    this.counterCardProduct = this.setCounterProduct(this.cardItem)
  }

  deleteOneProductInCard(product: Products) {
    if (product.numberOfProducts > 1) {
      for (let prod of this.cardItem) {
        if (prod == product) {
          product.numberOfProducts--
        }
      }
    } else {
      this.cardItem = this.cardItem.filter((prod) => prod != product)
    }
    this.counterCardProduct = this.setCounterProduct(this.cardItem)
  }

  clearCounterProductInCard() {
    this.cardItem = []
    this.counterCardProduct = this.cardItem.length
  }

  clearProductInCard() {
    this.cardItem = []
    this.counterCardProduct = this.setCounterProduct(this.cardItem)
  }

  getCounterCardProduct() {
    return this.counterCardProduct
  }
  deleteProductFromCard(product: any) {
    this.cardItem = this.cardItem.filter((p) => p !== product)
    this.counterCardProduct = this.setCounterProduct(this.cardItem)
  }


  setCounterProduct = (arr: Array<any>): number => { return arr.length !== 0 ? arr.map((prod) => prod.numberOfProducts).reduce((a, b) => a + b) : 0 }
}
