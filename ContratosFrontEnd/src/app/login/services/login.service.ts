import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../user";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLogin = 'http://localhost:8080/login';
  urlRegister = 'http://localhost:8080/register';

  private _isUserLoggedIn: boolean = false;
  private _email: string = '';

  constructor(private http: HttpClient) {
    this._email = localStorage.getItem('userEmail') || '';
    this._isUserLoggedIn = !!this._email;
  }

  verifyLogin(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.urlLogin, user)
      .pipe(
        tap(isValid => {
          if (isValid) {
            this.setEmail(user.email);
            this._isUserLoggedIn = true;
          }
        })
      );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlRegister, user);
  }

  get email(): string {
    return this._email;
  }

  setEmail(value: string): void {
    this._email = value;
    localStorage.setItem('userEmail', value);
  }

  isUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
  }

  logOut(): void {
    this._email = '';
    this._isUserLoggedIn = false;
    localStorage.removeItem('userEmail');
  }
}
