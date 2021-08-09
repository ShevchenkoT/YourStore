import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../interfaces';
@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  transform(orders: Order[]): Order[] {
    return orders.sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime());
  }
}
