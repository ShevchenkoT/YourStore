import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../service/cart-favorites.service';


@Pipe({
  name: 'filterPhones',
  pure: false
})
export class FilterPhonesPipe implements PipeTransform {

  transform(products: Product[], propertyCheck: Array<object>, key: string): Product[] {
    const trueCheck = Object.keys(propertyCheck).filter((i: any) => propertyCheck[i]);
    if (trueCheck.length) {
      return products.filter((product: any) => {
        return trueCheck.includes(product[key].toString());
      });
    }
    return products;
  }

}
