import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { RefModalRemoveDirective } from '../component/refModalRemove.directive';
import { RemoveModalComponent } from '../component/remove-modal/remove-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  refDir!: RefModalRemoveDirective
  constructor() {

  }

  createModal(refDirect: RefModalRemoveDirective, modalFactory: any) {
    this.refDir = refDirect
    const component = refDirect.containerRef.createComponent(modalFactory)

  }

  closeModal() {
    this.refDir.containerRef.remove()
  }
}
