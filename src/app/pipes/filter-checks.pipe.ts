import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChecks'
})
export class FilterChecksPipe implements PipeTransform {

  transform(obj: Array<any>, key: string): Array<any> {
    let arr: Array<string> = Array.from(new Set(obj.map((produckt) => {
      return typeof (produckt[key]) == 'string' ? produckt[key].trim() : produckt[key]
    })))
    return typeof (arr[0]) ? arr.sort((a: any, b: any) => { return a - b }) : arr.sort()
  }
}
