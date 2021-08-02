import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { showAlert } from 'src/app/shared/animations';
import { AlertService, AlertType } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [showAlert]
})
export class AlertComponent implements OnInit, OnDestroy {

  @Input() delay = 4000

  public text: string = ""
  public type: AlertType = 'success'
  timeout: any
  aSub!: Subscription

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.alert$.subscribe((alert) => {
      if (this.text) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        clearTimeout(this.timeout)
        this.text = ''
      }, this.delay);
      this.text = alert.text
      this.type = alert.type
    })
  }


  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }
}
