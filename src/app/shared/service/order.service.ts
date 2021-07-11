import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

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
        }))
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(`${environment.rbDbUrl}/order.json`, order)
  }
  update(order: Order): Observable<Order> {
    return this.http.patch<Order>(`${environment.rbDbUrl}/order/${order.id}.json`, order)
  }

}
