import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterChecks',
  pure: true
})
export class FilterChecksPipe implements PipeTransform {

  transform(obj: Array<any>, key: string): Array<any> {
    const arr: Array<string> = Array.from(new Set(obj.map((product) => {
      return typeof (product[key]) === 'string' ? product[key].trim() : product[key];
    })));
    return typeof (arr[0]) ? arr.sort((a: any, b: any) => a - b) : arr.sort();
  }
}
