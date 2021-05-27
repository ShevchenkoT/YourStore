import { Component, OnInit } from '@angular/core';
import { products} from '../products-list'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit  {


  products = products
  nameCheck: Array<Object> = []
  memoryCheck: Array<Object> = []
  colorCheck: Array<Object> = []

  constructor() { }

  ngOnInit(): void {

  }

}
