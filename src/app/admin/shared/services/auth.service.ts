import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FbAuthResponse, User } from '../../../shared/interfaces';

@Injectable({
  providedIn: 'root'
}
)
export class AuthService {

  public error$: Subject<string> = new Subject()
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  get token(): string | null {
    const expDate = new Date(localStorage.getItem('fb-token-exp')!)
    if (new Date() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true
    return this.http.post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }
  private handleError(error: HttpErrorResponse) {
    const { message } = error.error.error

    switch (message) {
      case "INVALID_EMAIL":
        this.error$.next('Email is wrong')
        break;
      case "INVALID_PASSWORD":
        this.error$.next('Password is wrong')
        break;
      case "EMAIL_NOT_FOUND":
        this.error$.next('User not found')
        break;
    }
    return throwError(error)
  }

  logout() {
    return this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
}
