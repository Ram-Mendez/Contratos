import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Autoridad} from "./autoridad";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntidadAutoridadService {
  url = 'http://localhost:8080/entidad-autoridad';

  constructor(private http: HttpClient) {
  }

  getEntidadesAutoridades(): Observable<Autoridad[]> {
    return this.http.get<Autoridad[]>(this.url);
  }

}
