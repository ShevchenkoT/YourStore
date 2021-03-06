import { Injectable } from '@angular/core';
import { Order, Product } from 'src/app/shared/interfaces';
import { OrderService } from 'src/app/shared/service/order.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { RefModalRemoveDirective } from '../component/refModalRemove.directive';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  refDir!: RefModalRemoveDirective;
  item!: Product | Order;
  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private alertService: AlertService,
  ) {

  }

  createModal(refDirect: RefModalRemoveDirective | any, item: Product | Order): void {
    this.refDir = refDirect;
    this.item = item;
  }

  closeModal(): void {
    this.refDir.containerRef.remove();
  }
  deleteProduct(): void {
    if ('phoneName' in this.item) {
      this.productService.remove(this.item.id).subscribe(() => {
        this.productService.product = this.productService.product.filter((p) => p.id !== this.item.id);
        this.closeModal();
        this.alertService.danger('Product remove');
      });
    } else if ('orderDate' in this.item) {
      this.orderService.remove(this.item).subscribe(() => {
        this.orderService.order = this.orderService.order.filter((o) => o.id !== this.item.id);
        this.alertService.danger('Order remove');
        this.closeModal();

      });
    }
  }
}

