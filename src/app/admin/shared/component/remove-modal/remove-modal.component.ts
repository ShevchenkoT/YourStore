import { Component, Input, OnInit } from '@angular/core';
import { ProductListComponent } from 'src/app/admin/product-list/product-list.component';

@Component({
  selector: 'app-remove-modal',
  templateUrl: './remove-modal.component.html',
  styleUrls: ['./remove-modal.component.scss']
})
export class RemoveModalComponent implements OnInit {

  @Input() product = 'someProduct'

  constructor(public productComponent: ProductListComponent) { }

  ngOnInit() {
  }

}
