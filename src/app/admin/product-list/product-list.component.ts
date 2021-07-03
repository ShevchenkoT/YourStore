import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: []
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = []
  constructor() { }

  ngOnInit() {
  }

}
