import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient) {
  }

  createAdministrator(administratorForm: any) {
    console.log(administratorForm);
    return this.http.post('http://localhost:8080/add-administrator', administratorForm);
  }
}

