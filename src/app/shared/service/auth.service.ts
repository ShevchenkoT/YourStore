import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces';

@Injectable(
)
export class AuthService {

  constructor(private http: HttpClient) { }

  // get token() {

  // }

  login(user: User): Observable<any> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
  }

  logout() {

  }

  isAuthenticated(): boolean {
    return true
  }

  private setToken() {

  }
}
