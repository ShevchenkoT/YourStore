import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModalRemove]'
})
export class RefModalRemoveDirective {

  constructor(public containerRef: ViewContainerRef) { }

}
