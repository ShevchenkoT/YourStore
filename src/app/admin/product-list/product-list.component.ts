import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = []
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((product) => {
      console.log(product);


      this.products = product
    })
  }

}
