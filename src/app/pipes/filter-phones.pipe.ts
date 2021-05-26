import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPhones',
  pure: false
})
export class FilterPhonesPipe implements PipeTransform {

  transform(products: Array<Object>, memoryCheck:Array<Object>): any{

    console.log(memoryCheck);

    return !memoryCheck.includes(true) ? products : null;
    //return null
  }

}
