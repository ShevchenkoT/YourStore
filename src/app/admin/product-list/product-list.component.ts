import { Component, OnInit } from '@angular/core';
import { AfterContentChecked, AfterViewInit, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { hideFilters, phoneModShowFilter } from 'src/app/shared/animations';
import { Product } from 'src/app/shared/interfaces';
import { PaginationService } from 'src/app/shared/service/pagination.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { SearchProductService } from 'src/app/shared/service/search-product.service';
import { RefModalRemoveDirective } from '../shared/component/refModalRemove.directive';
import { RemoveModalComponent } from '../shared/component/remove-modal/remove-modal.component';
import { ModalService } from '../shared/services/modal.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [hideFilters, phoneModShowFilter]
})
export class ProductListComponent implements OnInit, OnDestroy, AfterContentChecked, AfterViewInit {

  showAfterProduct = false;

  lowerPrice = '0';
  topPrice!: string;
  maxPrice!: string;

  nameCheck: Array<string> = [];
  memoryCheck: Array<string> = [];
  colorCheck: Array<string> = [];
  filterShow = ['show', 'hide', 'hide'];

  gSub!: Subscription;
  error = '';

  @ViewChild(RefModalRemoveDirective, { static: false }) refDirect!: RefModalRemoveDirective;

  constructor(
    public productService: ProductService,
    public searchService: SearchProductService,
    private modalService: ModalService,
    private resolver: ComponentFactoryResolver,
    public paginator: PaginationService,
  ) {
    setTimeout(() => {
      this.paginator.changeList(0);
    }, 800);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.gSub = this.productService.getAll()
      .subscribe(() => {
        this.maxPrice = this.topPrice = this.getMaxPrice(this.productService.product).toString();
      }, null, () => {
        setTimeout(() => {
          this.showAfterProduct = true;

        }, 0);
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.paginator.changeList(0);
    }, 500);
  }

  changeState(n: number): void {
    this.filterShow[n] = this.filterShow[n] === 'show' ? 'hide' : 'show';
  }

  ngAfterContentChecked(): void {
    if (this.productService.product.length) {
      const newMaxPrice = this.getMaxPrice(this.productService.product).toString();
      if (newMaxPrice !== this.maxPrice) {
        this.maxPrice = this.topPrice = newMaxPrice;
        this.lowerPrice = '0';
      }
    }
  }

  blockDown(event: any): void {
    if (this.lowerPrice > this.topPrice) {
      event.target.value = this.lowerPrice = this.topPrice;

    }
  }

  blockUp(event: any): void {
    if (this.lowerPrice > this.topPrice) {
      event.target.value = this.topPrice = this.lowerPrice;
    }
  }

  getMaxPrice(products: Product[]): any {
    return Math.max(...products.map((p) => p.phonePriceUsd));
  }

  remove(product: Product): void {
    const modalFactory = this.resolver.resolveComponentFactory(RemoveModalComponent);
    const component = this.refDirect.containerRef.createComponent(modalFactory);
    component.instance.product = product.phoneName;
    this.modalService.createModal(this.refDirect, product);
  }

  resetFilters(): void {
    this.memoryCheck = [];
    this.nameCheck = [];
    this.colorCheck = [];
    this.topPrice = this.getMaxPrice(this.productService.product).toString();
    this.lowerPrice = '0';
    this.searchService.searchProductStr = '';
    this.paginator.changeList(0);
  }
  showFilters(): void {
    const filters = document.querySelector('#product-filter');
    const topIcons = document.querySelector('#top-bar_icons');
    const burgerBtn = document.querySelector('#burger-btn');
    if (filters?.classList.contains('showEl')) {
      filters?.classList.remove('showEl');
    } else {
      filters?.classList.add('showEl');
      if (topIcons?.classList.contains('show_top-icons')) {
        topIcons?.classList.remove('show_top-icons');
      }
      if (burgerBtn?.classList.contains('open-burger')) {
        burgerBtn?.classList.remove('open-burger');
      }
    }
  }

  ngOnDestroy(): void {
    if (this.gSub) {
      this.gSub.unsubscribe();
    }
  }
}
