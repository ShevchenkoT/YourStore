import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Order, Product } from 'src/app/shared/interfaces';
import { OrderService } from 'src/app/shared/service/order.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  animations: [
    trigger('rotate', [
      state('start', style({ transform: 'rotate(0deg)' })),
      state('end', style({ transform: 'rotate(90deg)' })),
      transition('start <=> end', animate(450)),
      // transition('end => start', animate('800ms ease-in-out')),
    ])
  ]
})
export class OrdersComponent implements OnInit {
  toggle = true
  boxState = 'start'
  orders: Order[] = []
  constructor(
    private orderService: OrderService
  ) { }

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'

  }


  rotate(event: any) {
    event.target.classList.contains('rotate') ? event.target.classList.remove('rotate') : event.target.classList.add('rotate')
  }
  ngOnInit() {
    this.orderService.getAll().subscribe((orders: Order[]) => {
      this.orders = orders
    })
  }

  getAllPrice(products: Product[]): number {
    return products.map((p) => p.numberOfProducts ? p.phonePriceUsd * p.numberOfProducts : 0)
      .reduce((a, b) => a + b)
  }

}
