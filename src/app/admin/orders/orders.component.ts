import { Component, ComponentFactoryResolver, ErrorHandler, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { animateBoxButtons } from 'src/app/shared/animations';
import { Order } from 'src/app/shared/interfaces';
import { OrderService } from 'src/app/shared/service/order.service';
import { RefModalRemoveDirective } from '../shared/component/refModalRemove.directive';
import { RemoveModalComponent } from '../shared/component/remove-modal/remove-modal.component';
import { AlertService } from '../shared/services/alert.service';
import { ModalService } from '../shared/services/modal.service';
import { PrintService } from '../shared/services/print.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  animations: [animateBoxButtons]
})
export class OrdersComponent implements OnInit, OnDestroy {
  toggle = true
  firstUSub!: Subscription
  secondUSub!: Subscription
  error!: string

  doneSubmitted = false
  cancelSubmitted = false

  @ViewChild(RefModalRemoveDirective, { static: false }) refDirect!: RefModalRemoveDirective
  constructor(
    public orderService: OrderService,
    private printService: PrintService,
    private resolver: ComponentFactoryResolver,
    private modalService: ModalService,
    public alertService: AlertService,
  ) { }

  animate(id: string | undefined) {
    this.orderService.order.map((o) => {
      if (o.id === id) {
        o.state = o.state === 'end' ? 'start' : 'end'
      }
    })
  }
  ngOnInit() {
    this.orderService.getAll().subscribe(() => {
      this.orderService.order.map((o) => o.state = 'start')
    }, (error) => {
      this.error = error
    })
  }
  orderDone(order: Order) {
    this.doneSubmitted = true
    this.orderService.update({
      ...order,
      email: order.email,
      fullName: order.fullName,
      orderDate: order.orderDate,
      orderStatus: "done",
      phoneNumber: order.phoneNumber,
      products: order.products,
      sendingType: order.sendingType,
      address: order.address,
      orderPrice: order.orderPrice
    }).subscribe(() => {
      this.orderService.order.map((o) => {
        if (o.id === order.id) {
          o.orderStatus = 'done'
          this.alertService.success("Order confirmed")
          this.doneSubmitted = false
        }
      })
    })
  }
  orderCancel(order: Order) {
    this.cancelSubmitted = true
    this.orderService.update({
      ...order,
      email: order.email,
      fullName: order.fullName,
      orderDate: order.orderDate,
      orderStatus: "cancel",
      phoneNumber: order.phoneNumber,
      products: order.products,
      sendingType: order.sendingType,
      address: order.address
    }).subscribe(() => {
      this.orderService.order.map((o) => {
        if (o.id === order.id) {
          o.orderStatus = 'cancel'
          this.alertService.warning("Order rejected")
          this.cancelSubmitted = false
        }
      })
    })
  }

  getOrder(id: string | undefined) {
    this.printService.printDocument(id);
  }
  remove(order: Order) {
    const modalFactory = this.resolver.resolveComponentFactory(RemoveModalComponent)
    const component = this.refDirect.containerRef.createComponent(modalFactory)
    component.instance.product = order.id!
    this.modalService.createModal(this.refDirect, order)

  }

  ngOnDestroy() {
    if (this.firstUSub) {
      this.firstUSub.unsubscribe
    }
    if (this.secondUSub) {
      this.secondUSub.unsubscribe
    }
  }
}
