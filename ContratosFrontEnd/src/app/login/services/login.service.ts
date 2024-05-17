import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLogin = 'http://localhost:8080/login';
  urlRegister = 'http://localhost:8080/register';
  isUserLoggedIn: boolean = false;

  private _email: string = '';

  constructor(private http: HttpClient) {
  }

  verifyLogin(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.urlLogin, user)
      .pipe(
        tap(isValid => this.isUserLoggedIn = isValid)
      );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlRegister, user);
  }

  get email(): string {
    return this._email;
  }

  setEmail(value: string) {
    this._email = value;
  }

}
