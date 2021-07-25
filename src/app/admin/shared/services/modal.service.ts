import { Injectable } from '@angular/core';
import { Order, Product } from 'src/app/shared/interfaces';
import { OrderService } from 'src/app/shared/service/order.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { RefModalRemoveDirective } from '../component/refModalRemove.directive';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  refDir!: RefModalRemoveDirective
  item!: Product | Order
  constructor(
    private productService: ProductService,
    private orderService: OrderService,
  ) {

  }

  createModal(refDirect: RefModalRemoveDirective | any, item: Product | Order) {
    this.refDir = refDirect
    this.item = item

  }

  closeModal() {
    this.refDir.containerRef.remove()
  }
  deleteProduct() {
    if ('phoneName' in this.item) {
      this.productService.remove(this.item.id).subscribe(() => {
        this.productService.product = this.productService.product.filter((p) => p.id !== this.item.id)
        this.closeModal()
      })
    } else if ('orderDate' in this.item) {
      this.orderService.remove(this.item).subscribe(() => {
        this.orderService.order = this.orderService.order.filter((o) => o.id !== this.item.id)
        this.closeModal()
      })
    }
  }
}

