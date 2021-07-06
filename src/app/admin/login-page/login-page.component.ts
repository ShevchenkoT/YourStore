import { AfterContentChecked, Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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


  constructor(
    public auth: AuthService,
    private router: Router
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