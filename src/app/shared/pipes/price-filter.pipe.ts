import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces';
@Pipe({
  name: 'priceFilter',
  pure: true
})
export class PriceFilterPipe implements PipeTransform {
  transform(products: Product[], max: string, min: string): any {
    if (+max === 0 && +min === 1000) {
      return products;
    }
    return products.filter((p) => p.phonePriceUsd >= + min && p.phonePriceUsd <= +max);
  }
}
