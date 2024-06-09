import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient) {
  }

  createAdministrator(administratorForm: any) {
    return this.http.post('http://localhost:8080/add-administrator', administratorForm);
  }

  getAdministrators() {
    return this.http.get('http://localhost:8080/administrators');
  }

  getAdministratorById(id: any) {
    return this.http.get(`http://localhost:8080/administrator/${id}`);
  }

  deleteAdministrator(id: any) {
    return this.http.delete(`http://localhost:8080/delete-administrator/${id}`);
  }

  updateAdministrator(id: any, administrator: any) {
    return this.http.put(`http://localhost:8080/update-administrator/${id}`, administrator);

  }
}

