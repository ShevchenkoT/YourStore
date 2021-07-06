import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ProductService implements OnInit {
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.rbDbUrl}/product.json`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object
          .keys(response)
          .map((key) => ({
            ...response[key],
            id: key,
          }))

      }))
  }

  create(product: any): Observable<any> {
    return this.http.post(`${environment.rbDbUrl}/product.json`, product)
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.rbDbUrl}/product/${id}.json `)
  }
}
