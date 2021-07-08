import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, Product } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http: HttpClient) { }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>('', order)
  }

}
