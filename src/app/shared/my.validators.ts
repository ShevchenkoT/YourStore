import { FormControl } from '@angular/forms';

export class MyValidators {
  static ifInt(control: FormControl): { [key: string]: boolean } {
    return /\D/.test(control.value) ? { isNotInteger: true } : null as any;
  }
}
