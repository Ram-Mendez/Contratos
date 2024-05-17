import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contratos} from "./contratos";

@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  urlContratos = 'http://localhost:8080/contratos-main';

  constructor(private http: HttpClient) {
  }

  getContratos(): Observable<Contratos> {
    return this.http.get<Contratos>(this.urlContratos);
  }
}
