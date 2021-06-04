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
export class CartFavoritesService {
  //numberOfFavorites: number = 0
  //favoriteItems: Array<any> = []

  numberOfFavorites: number = 1
  favoriteItems: Array<any> = [{
    id: 4,
    phoneName: "Iphone 12 Pro",
    memory: 512,
    phoneColor: "Gold",
    phonePriceUsd: 1299,
    pictureUrl: "assets/img/phones/12ProGold.png"
  }]

  numberOfCart: number = 0
  cartItem: Array<any> = []
  totalPrice: number = 0
  addToFavorites(product: any) {
    if (!this.favoriteItems.map((prod) => prod.id).includes(product.id)) {
      this.favoriteItems.unshift(product)
      this.numberOfFavorites = this.favoriteItems.length
    }
  }
  deleteInFavorites(product: any) {
    this.favoriteItems = this.favoriteItems.filter((prod) => prod.id !== product.id)
    this.numberOfFavorites = this.favoriteItems.length
  }
  clearFavoriteList() {
    this.numberOfFavorites = 0
    this.favoriteItems = []
  }


  addToCart(product: any) {
    if (!this.cartItem.map((prod) => prod.id).includes(product.id)) {
      product.numberOfProducts = 1
      this.cartItem.unshift(product)
    } else {
      this.cartItem.map((prod) => prod.id === product.id ? ++prod.numberOfProducts : prod)
    }
    this.numberOfCart = this.findNumberOfCart()
    this.totalPrice = this.totalPriceOfCart()
  }
  deleteInCart(product: any) {
    this.cartItem = this.cartItem.filter((prod) => prod.id !== product.id)
    this.numberOfCart = this.findNumberOfCart()
    this.totalPrice = this.totalPriceOfCart()
  }
  addOneProductToCart(product: any) {
    product.numberOfProducts++
    this.numberOfCart = this.findNumberOfCart()
    this.totalPrice = this.totalPriceOfCart()
  }
  deleteOneProductInCart(product: any) {
    if (product.numberOfProducts > 1) {
      product.numberOfProducts--
      this.numberOfCart = this.findNumberOfCart()
      this.totalPrice = this.totalPriceOfCart()
    }
  }
  clearCartList() {
    this.numberOfCart = 0
    this.cartItem = []
  }

  findNumberOfCart = (): number => this.cartItem.length !== 0 ? this.cartItem.map((p) => p.numberOfProducts).reduce((a, b) => a + b) : 0

  totalPriceOfCart(): number {
    return this.cartItem.length !== 0 ? this.cartItem.map((p) => p.phonePriceUsd * p.numberOfProducts).reduce((a, b) => a + b) : 0
  }

}
