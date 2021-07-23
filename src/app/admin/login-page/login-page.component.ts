import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HoverPhoneDirective } from 'src/app/shared/directives/hover-phone.directive';
import { User } from '../../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [HoverPhoneDirective]
})
export class LoginPageComponent implements OnInit, AfterContentChecked {

  form!: FormGroup
  submitted: boolean = false
  message!: string

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngAfterContentChecked() {
    if (this.auth.isAuthenticated()) {
      this.form.get('email')?.disable()
      this.form.get('password')?.disable()
    } else {
      this.form.get('email')?.enable()
      this.form.get('password')?.enable()
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Please enter data'
      } else if (params['authFailed']) {
        this.message = 'Session is over. Enter data again '
      }
    })


    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.minLength(6), Validators.required]),
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    this.submitted = true
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.auth.login(user).subscribe((resolve) => {
      this.router.navigate(["/admin", "product-list"])
      this.form.reset()
      this.submitted = false
    }, () => {
      this.submitted = false
    })
  }

}
