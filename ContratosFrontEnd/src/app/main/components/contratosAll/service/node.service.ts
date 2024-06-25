import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NodeInput} from "./node-input";

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  apiUrl = 'http://localhost:8080/contrato/';
  apiUrl2 = 'http://localhost:8080/nodes/';

  constructor(private http: HttpClient) {
  }

  // mapear Node con NodeInputdto
  createNode(idContrato: any, node: any) {
    return this.http.post(this.apiUrl + idContrato + '/nodes', node);
  }

  getNodes(idContrato: any, parentId?: any) {
    let params = {};
    if (parentId) {
      params = {parentId: parentId};
    }
    return this.http.get(this.apiUrl + idContrato + '/nodes', {params: params});
  }

  deleteNode(id: number) {
    return this.http.delete(this.apiUrl2 + id);
  }
}
