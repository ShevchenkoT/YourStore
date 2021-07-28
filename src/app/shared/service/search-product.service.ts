import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  searchProductStr = ''

  resetStr() {
    this.searchProductStr = ''
  }
}
