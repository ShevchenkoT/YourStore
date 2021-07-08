import { Component, OnInit } from '@angular/core';
import { Order, Product } from 'src/app/shared/interfaces';
import { OrderService } from 'src/app/shared/service/order.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  orders: Order[] = []
  constructor(
    private orderService: OrderService
  ) { }


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
