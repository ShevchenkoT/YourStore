import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router,

  ) { }

  ngOnInit() {
  }
  exit() {
    this.auth.logout()
    this.router.navigate(['/admin', 'login'])
  }

  darkTheme(event: any) {


    if (document.body.style.cssText.includes('--text-color:#000')) {
      document.body.style.setProperty('--first-color', "#191919")
      document.body.style.setProperty('--second-color', "#272727")
      document.body.style.setProperty('--text-color', "#fff")
      document.body.style.setProperty('--body-color', "#000")
      event.target.parentNode.parentNode.parentNode.classList.remove("color-invert")
    } else {
      document.body.style.setProperty('--first-color', "#f0f2f5")
      document.body.style.setProperty('--second-color', "#c7c7c7")
      document.body.style.setProperty('--text-color', "#000")
      document.body.style.setProperty('--body-color', "#fbfbfd")
      event.target.parentNode.parentNode.parentNode.classList.add("color-invert")
    }

  }

}
