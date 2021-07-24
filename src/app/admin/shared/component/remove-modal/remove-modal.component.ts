import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-remove-modal',
  templateUrl: './remove-modal.component.html',
  styleUrls: ['./remove-modal.component.scss']
})
export class RemoveModalComponent implements OnInit {

  @Input() product = 'someProduct'

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

}
