import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order[] = []

  constructor(public http: HttpClient) { }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.rbDbUrl}/order.json`)
      .pipe(
        map((response: { [key: string]: any }) => {
          return Object
            .keys(response)
            .map((key) => ({
              ...response[key],
              id: key,
            }))
        }),
        tap((order: Order[]) => {
          this.order = order
        })
      )
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(`${environment.rbDbUrl}/order.json`, order)
  }
  update(order: Order): Observable<Order> {
    return this.http.patch<Order>(`${environment.rbDbUrl}/order/${order.id}.json`, order)
  }
  remove(order: Order): Observable<any> {
    return this.http.delete<any>(`${environment.rbDbUrl}/order/${order.id}.json`)
  }

  getById(id: string | undefined): Observable<Order> {
    return this.http.get<Order>(`${environment.rbDbUrl}/order/${id}.json`)
      .pipe(
        map((order: Order) => {
          return {
            ...order,
            id,
          }
        })
      )
  }
}



