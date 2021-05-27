import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterPhones',
  pure: false
})
export class FilterPhonesPipe implements PipeTransform {

  transform(products: Array<Object>, propertyCheck: Array<Object>, key:string ): any{
    let trueCheck = Object.keys(propertyCheck).filter((key: any) => propertyCheck[key]);
    if (trueCheck.length) {
      return products.filter((product: any) => {
        return trueCheck.includes(product[key].toString())
      })
    }
    return products
  }

}
