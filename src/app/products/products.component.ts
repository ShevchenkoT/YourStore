import { Component, OnInit } from '@angular/core';
import { products} from '../products-list'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit {


  products = products

  //phoneNames:Array<string> =[]
  constructor() { }

  ngOnInit(): void {
    // this.phoneNames = this.products.map((produckt) => produckt.phoneName)
    // console.log(this.phoneNames)
  }



}
