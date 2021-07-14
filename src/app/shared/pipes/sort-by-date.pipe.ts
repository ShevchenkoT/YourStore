import { Pipe, PipeTransform } from '@angular/core';
import { OrderWithState } from '../interfaces';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(orders: OrderWithState[]): OrderWithState[] {
    return orders.sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime())
  }
}
