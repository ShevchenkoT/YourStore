import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces';


@Pipe({
  name: 'searchProduct',
  pure: true
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], searchProductStr: string): Product[] {
    if (!searchProductStr) {
      return products
    }
    return products.filter((p) =>
      this.spaceFilter(p.phoneName).includes(this.spaceFilter(searchProductStr))
    )
  }

  spaceFilter(name: string) {
    return name.toLowerCase().split('').filter((n) => n !== ' ').join('')
  }
}
