import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverPhone]'
})
export class HoverPhoneDirective {

  @Input() color:string = "red"

  constructor(private el:ElementRef) { }

  @HostListener("mouseenter", ["$event.target"]) onEnter(event: Event) {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener("mouseleave", ["$event.target"]) onLeave(event: Event) {
    this.el.nativeElement.style.backgroundColor = null
  }

}
