import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverPhone]'
})
export class HoverPhoneDirective {

 

  constructor(private el:ElementRef) { }

  @HostListener("mouseenter", ["$event.target"]) onEnter(event: Event) {
    this.el.nativeElement.style.outline = "1px solid gray"
    this.el.nativeElement.lastChild.style.display = "none"
  }

  @HostListener("mouseleave", ["$event.target"]) onLeave(event: Event) {
    this.el.nativeElement.style.outline = null
    this.el.nativeElement.lastChild.style.display = ""
  }

}
