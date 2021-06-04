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
export class CardFavoritesService {
  numberOfFavorites: number = 0
  favoriteItems: Array<any> = []

  numberOfCard: number = 0
  cardItem: Array<any> = []

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


  addToCard(product: any) {
    if (!this.cardItem.map((prod) => prod.id).includes(product.id)) {
      product.numberOfProducts = 1
      this.cardItem.unshift(product)
    } else {
      this.cardItem.map((prod) => prod.id === product.id ? ++prod.numberOfProducts : prod)
    }
    this.numberOfCard = this.findNumberOfCard()
  }
  deleteInCard(product: any) {
    this.cardItem = this.cardItem.filter((prod) => prod.id !== product.id)
    this.numberOfCard = this.findNumberOfCard()
  }
  addOneProductToCard(product: any) {
    product.numberOfProducts++
    this.numberOfCard = this.findNumberOfCard()
  }
  deleteOneProductToCard(product: any) {
    if (product.numberOfProducts > 1) {
      product.numberOfProducts--
      this.numberOfCard = this.findNumberOfCard()
    }
  }
  clearCardList() {
    this.numberOfCard = 0
    this.cardItem = []
  }

  findNumberOfCard = (): number => this.cardItem.length !== 0 ? this.cardItem.map((prod) => prod.numberOfProducts).reduce((a, b) => a + b) : 0


}
