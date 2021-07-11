import { Component, OnInit } from '@angular/core';
import { animateBoxButtons } from 'src/app/shared/animations';
import { Order, Product } from 'src/app/shared/interfaces';
import { OrderService } from 'src/app/shared/service/order.service';
export interface OrderWithState extends Order {
  state?: 'start' | 'end'
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  animations: [animateBoxButtons]
})
export class OrdersComponent implements OnInit {
  toggle = true
  orders: OrderWithState[] = []
  constructor(
    private orderService: OrderService
  ) { }

  animate(id: string | undefined) {
    this.orders.map((o) => {
      if (o.id === id) {
        o.state = o.state === 'end' ? 'start' : 'end'
      }
    })
  }
  ngOnInit() {
    this.orderService.getAll().subscribe((orders: Order[]) => {
      this.orders = orders
      this.orders.map((o) => o.state = 'start')
    })
  }

  getAllPrice(products: Product[]): number {
    return products.map((p) => p.numberOfProducts ? p.phonePriceUsd * p.numberOfProducts : 0)
      .reduce((a, b) => a + b)
  }
  orderDone(order: Order) {
    this.orderService.update({
      ...order,
      email: order.email,
      fullName: order.fullName,
      orderDate: order.orderDate,
      orderStatus: "done",
      phoneNumber: order.phoneNumber,
      products: order.products,
      sendingType: order.sendingType
    }).subscribe((test) => {
      this.orders.map((o) => {
        if (o.id === order.id) {
          o.orderStatus = 'done'
        }
      })
    })
  }
  orderCancel(order: Order) {
    this.orderService.update({
      ...order,
      email: order.email,
      fullName: order.fullName,
      orderDate: order.orderDate,
      orderStatus: "cancel",
      phoneNumber: order.phoneNumber,
      products: order.products,
      sendingType: order.sendingType
    }).subscribe((test) => {
      this.orders.map((o) => {
        if (o.id === order.id) {
          o.orderStatus = 'cancel'
        }
      })
    })
  }

}
