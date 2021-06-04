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
  numberOfFavorites: number = 0
  favoriteItems: Array<any> = []

  numberOfCart: number = 0
  cartItem: Array<any> = []

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
  }
  deleteInCart(product: any) {
    this.cartItem = this.cartItem.filter((prod) => prod.id !== product.id)
    this.numberOfCart = this.findNumberOfCart()
  }
  addOneProductToCart(product: any) {
    product.numberOfProducts++
    this.numberOfCart = this.findNumberOfCart()
  }
  deleteOneProductInCart(product: any) {
    if (product.numberOfProducts > 1) {
      product.numberOfProducts--
      this.numberOfCart = this.findNumberOfCart()
    }
  }
  clearCartList() {
    this.numberOfCart = 0
    this.cartItem = []
  }

  findNumberOfCart = (): number => this.cartItem.length !== 0 ? this.cartItem.map((prod) => prod.numberOfProducts).reduce((a, b) => a + b) : 0


}
