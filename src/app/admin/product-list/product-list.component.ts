import { ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';
import { ProductService } from 'src/app/shared/service/product.service';
import { SearchProductService } from 'src/app/shared/service/search-product.service';
import { RefModalRemoveDirective } from '../shared/component/refModalRemove.directive';
import { RemoveModalComponent } from '../shared/component/remove-modal/remove-modal.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  countProduct = 10
  startProductList = 0
  productsAfterPipes = 10

  lowerPrice: string = '0';
  topPrice!: string
  maxPrice!: string

  products: Array<Product> = []
  nameCheck: Product[] = [];
  memoryCheck: Product[] = [];
  colorCheck: Product[] = [];

  error = '';

  @ViewChild(RefModalRemoveDirective, { static: false }) refDirect!: RefModalRemoveDirective

  constructor(
    private productService: ProductService,
    public searchService: SearchProductService,
    private resolver: ComponentFactoryResolver
  ) { }
  ngOnInit(): void {
    this.productService.getAll()
      .subscribe((product: Product[]) => {
        this.products = product
        this.maxPrice = this.topPrice = this.getMaxPrice(this.products).toString()
      })
  }
  blockDown(event: any) {
    if (this.lowerPrice > this.topPrice) {
      event.target.value = this.lowerPrice = this.topPrice
    }
  }
  blockUp(event: any) {
    if (this.lowerPrice > this.topPrice) {
      event.target.value = this.topPrice = this.lowerPrice
    }
  }
  getMaxPrice(products: Product[]): any {
    return Math.max(...products.map((p) => p.phonePriceUsd))
  }
  numSequence(n: number): Array<number> {

    return Array(Math.ceil(n));
  }

  changeList(i: number) {
    this.startProductList = +this.countProduct * i
  }








  remove(id: string | undefined) {
    const modalFactory = this.resolver.resolveComponentFactory(RemoveModalComponent)

    const component = this.refDirect.containerRef.createComponent(modalFactory)

    // if (id) {
    //   this.productService.remove(id).subscribe(() => {
    //     this.products = this.products.filter((p) => p.id !== id)
    //   })
    // }
  }
  closeModal() {
    console.log('test 2');

  }

}
