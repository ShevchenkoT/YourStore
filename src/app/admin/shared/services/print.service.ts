import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;

  constructor(private router: Router) { }

  printDocument(documentData: string | undefined): void {
    this.isPrinting = true;
    this.router.navigate(['/admin', 'invoice', documentData]
    );
  }

  onDataReady(): void {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate([{ outlets: { print: null } }]).then(() => {
        this.router.navigate(['/admin', 'orders']);
      });
    });
  }
}
