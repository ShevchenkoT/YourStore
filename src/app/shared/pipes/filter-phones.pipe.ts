import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces';
import { ProductService } from '../service/product.service';
@Pipe({
  name: 'filterPhones',
  pure: false
})
export class FilterPhonesPipe implements PipeTransform {

  constructor(private productService: ProductService) { }

  transform(products: Product[], propertyCheck: Array<object>, key: string): Product[] {

    const allProd = this.productService.product.map((p: any) => p[key])

    let trueCheck = Object.keys(propertyCheck)
      .filter((i: any) => propertyCheck[i]).filter((tC) => allProd.includes(tC))


    if (trueCheck.length) {
      return products.filter((product: any) => {
        return trueCheck.includes(product[key].toString());
      });
    }
    return products;
  }

}
