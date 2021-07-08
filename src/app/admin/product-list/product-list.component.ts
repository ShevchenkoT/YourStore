import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = []
  nameCheck: Product[] = [];
  memoryCheck: Product[] = [];
  colorCheck: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((product) => {
      this.products = product
    })
  }

  remove(id: string | undefined) {
    if (id) {
      this.productService.remove(id).subscribe(() => {
        this.products = this.products.filter((p) => p.id !== id)
      })
    }
  }
}
