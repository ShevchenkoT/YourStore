import { Injectable } from '@angular/core';
import { Product } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class CartFavoritesService {
  numberOfFavorites = 0;
  favoriteItems: Product[] = [];

  numberOfCart = 0;
  cartItem: Product[] = [];
  totalPrice = 0;


  addToFavorites(product: Product): void {
    if (!this.favoriteItems.map((prod) => prod.id).includes(product.id)) {
      this.favoriteItems.unshift(product);
      this.numberOfFavorites = this.favoriteItems.length;
    }
  }
  deleteInFavorites(product: Product): void {
    this.favoriteItems = this.favoriteItems.filter((prod) => prod.id !== product.id);
    this.numberOfFavorites = this.favoriteItems.length;
  }
  clearFavoriteList(): void {
    this.numberOfFavorites = 0;
    this.favoriteItems = [];
  }

  addToCart(product: Product): void {
    if (!this.cartItem.map((prod) => prod.id).includes(product.id)) {
      product.numberOfProducts = 1;
      this.cartItem.unshift(product);
    } else {
      this.cartItem.map((prod) => prod.id === product.id && prod.numberOfProducts ? ++prod.numberOfProducts : prod);
    }
    this.numberOfCart = this.findNumberOfCart();
    this.totalPrice = this.totalPriceOfCart();
  }
  deleteInCart(product: Product): void {
    this.cartItem = this.cartItem.filter((prod) => prod.id !== product.id);
    this.numberOfCart = this.findNumberOfCart();
    this.totalPrice = this.totalPriceOfCart();
  }
  addOneProductToCart(product: Product): void {
    if (product.numberOfProducts) {
      product.numberOfProducts++;
    }
    this.numberOfCart = this.findNumberOfCart();
    this.totalPrice = this.totalPriceOfCart();
  }
  deleteOneProductInCart(product: Product): void {
    if (product.numberOfProducts && product.numberOfProducts > 1) {
      product.numberOfProducts--;
      this.numberOfCart = this.findNumberOfCart();
      this.totalPrice = this.totalPriceOfCart();
    }
  }
  clearCartList(): void {
    this.numberOfCart = 0;
    this.cartItem = [];
  }

  findNumberOfCart = (): number => this.cartItem.length !== 0 ? this.cartItem
    .map((p) => p.numberOfProducts ? p.numberOfProducts : 0)
    .reduce((a, b) => a + b) : 0

  totalPriceOfCart(): number {
    return this.cartItem.length !== 0 ? this.cartItem
      .map((p) => p.numberOfProducts ? p.phonePriceUsd * p.numberOfProducts : 0)
      .reduce((a, b) => a + b) : 0;
  }

}
