import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contrato} from "./contrato";

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  urlContratos = 'http://localhost:8080/contratos';

  constructor(private http: HttpClient) {
  }


  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.urlContratos);
  }

  getContratoById(id: number): Observable<Contrato> {
    return this.http.get<Contrato>(`${this.urlContratos}/${id}`);
  }

  createContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.urlContratos, contrato);
  }

  editContrato(id: number, contrato: Contrato): Observable<Contrato> {
    return this.http.put<Contrato>(this.urlContratos + '/' + id, contrato);

  }
  deleteContrato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlContratos}/${id}`);
  }


}
