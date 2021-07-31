import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService, AlertType } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [

    trigger('enterEl', [
      transition(':enter', [
        animate(500, keyframes([
          style({ top: "-50px", offset: 0 }),
          style({ top: "100px", offset: 1 })
        ]))
      ]),
      transition(':leave', [
        animate(500, keyframes([
          style({ top: "100px", offset: 0 }),
          style({ top: "-50px", offset: 1 })
        ]))
      ])
    ])
  ]
})
export class AlertComponent implements OnInit, OnDestroy {

  @Input() delay = 5000

  public text: string = ""
  public type!: AlertType
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
