import { Injectable } from '@angular/core';


export interface Product {
  id: number,
  phoneName: string,
  memory: number,
  phoneColor: string,
  phonePriceUsd: number,
  pictureUrl: string,
  numberOfProducts?: number
}


@Injectable({
  providedIn: 'root'
})
export class CartFavoritesService {
  numberOfFavorites: number = 0
  favoriteItems: Product[] = []

  numberOfCart: number = 0
  cartItem: Product[] = []
  totalPrice: number = 0


  addToFavorites(product: Product) {
    if (!this.favoriteItems.map((prod) => prod.id).includes(product.id)) {
      this.favoriteItems.unshift(product)
      this.numberOfFavorites = this.favoriteItems.length
    }
  }
  deleteInFavorites(product: Product) {
    this.favoriteItems = this.favoriteItems.filter((prod) => prod.id !== product.id)
    this.numberOfFavorites = this.favoriteItems.length
  }
  clearFavoriteList() {
    this.numberOfFavorites = 0
    this.favoriteItems = []
  }


  addToCart(product: Product) {
    if (!this.cartItem.map((prod) => prod.id).includes(product.id)) {
      product.numberOfProducts = 1
      this.cartItem.unshift(product)
    } else {
      this.cartItem.map((prod) => prod.id === product.id ? ++prod.numberOfProducts! : prod)
    }
    this.numberOfCart = this.findNumberOfCart()
    this.totalPrice = this.totalPriceOfCart()
  }
  deleteInCart(product: Product) {
    this.cartItem = this.cartItem.filter((prod) => prod.id !== product.id)
    this.numberOfCart = this.findNumberOfCart()
    this.totalPrice = this.totalPriceOfCart()
  }
  addOneProductToCart(product: Product) {
    product.numberOfProducts!++
    this.numberOfCart = this.findNumberOfCart()
    this.totalPrice = this.totalPriceOfCart()
  }
  deleteOneProductInCart(product: Product) {
    if (product.numberOfProducts! > 1) {
      product.numberOfProducts!--
      this.numberOfCart = this.findNumberOfCart()
      this.totalPrice = this.totalPriceOfCart()
    }
  }
  clearCartList() {
    this.numberOfCart = 0
    this.cartItem = []
  }

  findNumberOfCart = (): number => this.cartItem.length !== 0 ? this.cartItem.map((p) => p.numberOfProducts!).reduce((a, b) => a + b) : 0

  totalPriceOfCart(): number {
    return this.cartItem.length !== 0 ? this.cartItem.map((p) => p.phonePriceUsd * p.numberOfProducts!).reduce((a, b) => a + b) : 0
  }

}
