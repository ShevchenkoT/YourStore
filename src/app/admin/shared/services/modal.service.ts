import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { ProductsComponent } from 'src/app/products/products.component';
import { ProductService } from 'src/app/shared/service/product.service';
import { RefModalRemoveDirective } from '../component/refModalRemove.directive';
import { RemoveModalComponent } from '../component/remove-modal/remove-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  refDir!: RefModalRemoveDirective
  productId!: string
  constructor(
    private productService: ProductService,
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
      console.log("remote product is done");
      this.closeModal()
    })
  }
}
