import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  apiUrl = 'http://localhost:8080/contrato/';

  constructor(private http: HttpClient) { }

  createNode(node: any) {
    return this.http.post('/api/node', node);
  }
}
