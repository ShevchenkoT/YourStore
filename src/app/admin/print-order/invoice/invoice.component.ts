import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrderWithState } from 'src/app/shared/interfaces';
import { OrderService } from 'src/app/shared/service/order.service';
import { PrintService } from '../../shared/services/print.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoiceForPrint!: OrderWithState

  constructor(
    private printService: PrintService,
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) {
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.orderService.getById(params['id'])
      })
    ).subscribe((order: OrderWithState) => {
      this.invoiceForPrint = order
      this.printService.onDataReady()
      navigator.geolocation.watchPosition((locate) => {
        console.log(locate);

      })


    })
  }

}
