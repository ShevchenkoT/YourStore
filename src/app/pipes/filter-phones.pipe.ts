import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterPhones',
  pure: false
})
export class FilterPhonesPipe implements PipeTransform {

  transform(products: Array<Object>, memoryCheck: Array<Object>): any{

    if (memoryCheck.includes(true)) {

      let trueMemory = Object.keys(memoryCheck).filter((key: any) => memoryCheck[key]);
      return products.filter((product: any) => {
        return trueMemory.includes(product.memory.toString())
      })
      
    }
    return products
  }

}
