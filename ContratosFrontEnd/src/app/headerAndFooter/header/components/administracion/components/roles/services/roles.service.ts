import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  url = 'http://localhost:8080/roles';
  url2 = 'http://localhost:8080/role';

  constructor(private http: HttpClient) {
  }

  getRoles() :Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getRole(id: any) {
    return this.http.get(`${this.url2}/${id}`);
  }

  createRole(roleForm: any) {
    return this.http.post(this.url, roleForm);
  }

  updateRole(id: number, roleForm: any) {
    return this.http.put(`${this.url}/${id}`, roleForm);
  }

  deleteRole(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
