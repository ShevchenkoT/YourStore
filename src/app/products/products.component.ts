import { Component, OnInit } from '@angular/core';
import { products} from '../products-list'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit  {


  products = products
  //memoryCheck: Array<any> = []
  memoryCheck: Array<Object> = []

  constructor() { }

  ngOnInit(): void {

  }


  test() {
    //console.log("Change", this.memoryCheck) //,this.memoryCheck)

  }

}
