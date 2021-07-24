import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';
import { RefModalRemoveDirective } from '../component/refModalRemove.directive';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  refDir!: RefModalRemoveDirective
  productId!: string
  constructor(
    private productService: ProductService,
    private router: Router
  ) {

  }

  createModal(refDirect: RefModalRemoveDirective | any, id: string | any) {
    this.refDir = refDirect
    this.productId = id
  }

  closeModal() {
    this.refDir.containerRef.remove()
  }
  deleteProduct() {
    this.productService.remove(this.productId).subscribe(() => {
      this.productService.product = this.productService.product.filter((p) => p.id !== this.productId)
      this.closeModal()
    })
  }
}
