import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contratante} from "./contratante";

@Injectable({
  providedIn: 'root'
})
export class EntidadContratanteService {

  url = 'http://localhost:8080/entidad-contratante';

  constructor(private http: HttpClient) {
  }

  getEntidadesContratantes(): Observable<Contratante[]> {
    return this.http.get<Contratante[]>(this.url);
  }

  createEntidadContratante(contratante: Contratante): Observable<Contratante> {
    return this.http.post<Contratante>(this.url, contratante);

  }
  updateEntidadContratante(contratante: Contratante): Observable<Contratante> {
    return this.http.put<Contratante>(this.url, contratante);
  }

  deleteEntidadContratante(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

}
