import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;

  constructor(private router: Router) { }

  printDocument(documentData: string | undefined) {
    this.isPrinting = true;
    this.router.navigate(['/admin', 'invoice', documentData]
    );
  }

  onDataReady() {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate([{ outlets: { print: null } }]).then(() => {
        this.router.navigate(['/admin', 'orders'])
      })
    });
  }



}
