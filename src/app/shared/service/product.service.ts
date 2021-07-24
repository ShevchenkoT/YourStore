import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Product } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class ProductService implements OnInit {
  product: Product[] = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.rbDbUrl}/product.json`)
      .pipe(
        map((response: { [key: string]: any }) => {
          return Object
            .keys(response)
            .map((key) => ({
              ...response[key],
              id: key,
            }))

        }),
        tap((product: Product[]) => {
          this.product = product
        })
      )
  }

  create(product: any): Observable<any> {
    return this.http.post(`${environment.rbDbUrl}/product.json`, product)
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.rbDbUrl}/product/${id}.json`)
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.rbDbUrl}/product/${id}.json`)
      .pipe(
        map((product: Product) => {
          return {
            ...product,
            id,
          }
        })
      )
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${environment.rbDbUrl}/product/${product.id}.json`, product)
  }
}
