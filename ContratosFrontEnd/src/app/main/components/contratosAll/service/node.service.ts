import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NodeInput} from "./node-input";
import {BehaviorSubject, Subject} from "rxjs";
import {Contrato} from "./contrato";

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  apiUrl = 'http://localhost:8080/contrato/';
  apiUrl2 = 'http://localhost:8080/nodes/';

  selectedNode$ = new BehaviorSubject<NodeInput | any>([null]);

  constructor(private http: HttpClient) {
  }

  createNode(idContrato: any, node: any) {
    return this.http.post(this.apiUrl + idContrato + '/nodes', node);
  }

  updateNode(nodeId: any, node: any,) {
    return this.http.put(this.apiUrl2 + nodeId, node);
  }

  getTotalAmounts(nodeid: any) {
    return this.http.get(this.apiUrl2 + nodeid + '/total');
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
