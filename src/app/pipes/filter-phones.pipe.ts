import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../cart-favorites.service';


@Pipe({
  name: 'filterPhones',
  pure: false
})
export class FilterPhonesPipe implements PipeTransform {

  transform(products: Product[], propertyCheck: Array<Object>, key: string): Product[] {
    let trueCheck = Object.keys(propertyCheck).filter((key: any) => propertyCheck[key]);
    if (trueCheck.length) {
      return products.filter((product: any) => {
        return trueCheck.includes(product[key].toString())
      })
    }
    return products
  }

}
