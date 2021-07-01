import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
)
export class AuthService {

  constructor(private http: HttpClient) { }

  // get token() {

  // }

  login() {

  }

  logout() {

  }

  isAuthenticated(): boolean {
    return true
  }

  private setToken() {

  }
}
