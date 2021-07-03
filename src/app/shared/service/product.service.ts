import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ProductService implements OnInit {
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

  }

  getAll(): Observable<any> {
    return this.http.get('https://yourstore-01-default-rtdb.firebaseio.com/')
  }
}
