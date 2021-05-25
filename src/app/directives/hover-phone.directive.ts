import { Directive, ElementRef, HostListener, Input, Output ,EventEmitter} from '@angular/core';



@Directive({
  selector: '[appHoverPhone]',

})
export class HoverPhoneDirective {


  @Output() newItemEvent = new EventEmitter<string>();



  constructor(private el:ElementRef) { }

  @HostListener("mouseenter", ["$event.target"]) onEnter(event: Event,value: boolean) {
    this.el.nativeElement.style.outline = "2px solid gray"
    //this.el.nativeElement.lastChild.style.display = "none"
    //this.el.nativeElement.lastChild.previousSibling.style.display = 'block'
    this.el.nativeElement.lastChild.style.height = "0px"

    this.el.nativeElement.lastChild.previousSibling.style.height = "35px"


  }

  @HostListener("mouseleave", ["$event.target"]) onLeave(event: Event) {
    this.el.nativeElement.style.outline = null
    //this.el.nativeElement.lastChild.style.display = ""
    //this.el.nativeElement.lastChild.previousSibling.style.display = 'none'
    this.el.nativeElement.lastChild.style.height = "35px"
     this.el.nativeElement.lastChild.previousSibling.style.height = "0px"


  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
