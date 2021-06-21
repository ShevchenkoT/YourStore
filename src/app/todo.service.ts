import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './cart-favorites.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http: HttpClient) { }

  addTodos(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/mock-data/products.json');
  }
}
