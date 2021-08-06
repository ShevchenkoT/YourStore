import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces';
import { SearchProductService } from '../service/search-product.service';


@Pipe({
  name: 'searchProduct',
})
export class SearchProductPipe implements PipeTransform {
  constructor(private searchService: SearchProductService) { }

  transform(products: Product[], searchProductStr: string): Product[] {
    if (searchProductStr) {
      products = products.filter((p) =>
        this.spaceFilter(p.phoneName).includes(this.spaceFilter(searchProductStr))
      )
    }
    setTimeout(() => {
      this.searchService.countProductAfterPipes = products.length
    }, 0)
    return products
  }

  spaceFilter(name: string) {
    return name.toLowerCase().split('').filter((n) => n !== ' ').join('')
  }
}
