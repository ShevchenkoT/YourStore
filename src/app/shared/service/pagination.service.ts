import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  countProduct = 10
  startProductList = 0
  productsAfterPipes = 10


  showListBtn = 5
  showBackToFirstList = false
  showBackToLastList = false
  constructor() { }
  changeList(i: number) {
    const listBtn = document.querySelectorAll(".dynamic-footer_button")//dynamic-footer_button
    listBtn.forEach((btn, id) => {
      id === i ? btn.classList.add('active') : btn.classList.remove('active')
      btn.classList.add('dynamic-footer_button_hide')
    })

    this.showBackToFirstList = i > 2 ? true : false
    this.showBackToLastList = i < listBtn.length - 3 ? true : false
    listBtn.forEach((btn, id) => {
      if (id >= i - 2 && id <= i + 2) {
        btn.classList.remove('dynamic-footer_button_hide')
      }
    })
    this.startProductList = +this.countProduct * i
  }

  numSequence(n: number): Array<number> {
    return Array(8)//Array(Math.ceil(n));
  }
}
