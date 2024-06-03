import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  url = 'http://localhost:8080/add-user';
  url2 = 'http://localhost:8080/users';
  url3 = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(`${this.url2}/${id}`);

  }
  getUsers(): Observable<any> {
    return this.http.get(this.url2);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(this.url, user);
  }

  updateUser(id: any, userForm: any): Observable<any> {
    return this.http.put(`${this.url2}/${id}`, userForm);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.url3}/${id}`);
  }
}
