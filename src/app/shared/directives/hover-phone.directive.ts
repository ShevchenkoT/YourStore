import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appHoverPhone]',

})
export class HoverPhoneDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter', ['$event.target']) onEnter(): void {
    this.el.nativeElement.style.outline = '2px solid gray';
    this.el.nativeElement.lastChild.style.height = '0px';
    this.el.nativeElement.lastChild.previousSibling.style.height = '35px';
  }

  @HostListener('mouseleave', ['$event.target']) onLeave(): void {
    this.el.nativeElement.style.outline = null;
    this.el.nativeElement.lastChild.style.height = '35px';
    this.el.nativeElement.lastChild.previousSibling.style.height = '0px';
  }
}
