import { AfterContentChecked, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { hideFilters } from 'src/app/shared/animations';
import { Product } from 'src/app/shared/interfaces';
import { ProductService } from 'src/app/shared/service/product.service';
import { SearchProductService } from 'src/app/shared/service/search-product.service';
import { RefModalRemoveDirective } from '../shared/component/refModalRemove.directive';
import { RemoveModalComponent } from '../shared/component/remove-modal/remove-modal.component';
import { ModalService } from '../shared/services/modal.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [hideFilters]
})
export class ProductListComponent implements OnInit, OnDestroy, AfterContentChecked {
  countProduct = 10
  startProductList = 0

  lowerPrice: string = '0';
  topPrice!: string
  maxPrice!: string

  nameCheck: Array<string> = [];
  memoryCheck: Array<string> = [];
  colorCheck: Array<string> = [];
  filterShow = ["show", "hide", "hide"]

  gSub!: Subscription
  error = '';

  @ViewChild(RefModalRemoveDirective, { static: false }) refDirect!: RefModalRemoveDirective

  constructor(
    public productService: ProductService,
    public searchService: SearchProductService,
    private modalService: ModalService,
    private resolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    this.gSub = this.productService.getAll()
      .subscribe(() => {
        this.maxPrice = this.topPrice = this.getMaxPrice(this.productService.product).toString()
      })
  }

  changeState(n: number) {
    this.filterShow[n] = this.filterShow[n] === "show" ? "hide" : "show"
  }

  ngAfterContentChecked() {
    if (this.productService.product.length) {
      const newMaxPrice = this.getMaxPrice(this.productService.product).toString()
      if (newMaxPrice !== this.maxPrice) {
        this.maxPrice = this.topPrice = newMaxPrice
        this.lowerPrice = '0';
      }
    }
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

  remove(product: Product) {
    const modalFactory = this.resolver.resolveComponentFactory(RemoveModalComponent)
    const component = this.refDirect.containerRef.createComponent(modalFactory)
    component.instance.product = product.phoneName
    this.modalService.createModal(this.refDirect, product)
  }

  resetFilters() {
    this.memoryCheck = []
    this.nameCheck = []
    this.colorCheck = []
    this.topPrice = this.getMaxPrice(this.productService.product).toString()
    this.lowerPrice = '0';
    this.changeList(0)
  }

  ngOnDestroy() {
    if (this.gSub) {
      this.gSub.unsubscribe
    }
  }
}
