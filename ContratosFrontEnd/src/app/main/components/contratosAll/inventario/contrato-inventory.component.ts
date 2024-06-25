import {Component, OnInit} from '@angular/core';
import {TreeNode, TreeTableNode} from "primeng/api";
import {DialogModule} from 'primeng/dialog';


@Component({
  selector: 'app-contrato-inventory',
  templateUrl: './contrato-inventory.component.html',
  styleUrl: './contrato-inventory.component.css'
})
export class ContratoInventoryComponent implements OnInit {
  files!: TreeNode[];
  selectedNode!: TreeNode;
  visible: boolean = false;


  constructor() {
  }

  ngOnInit() {
    // this.nodeService.getFilesystem().then((files) => (this.files = files));
    this.files = [
      {
        "data": {
          "description": "Node 1"
        },
        "children": [
          {
            "data": {
              "description": "Child Node 1"
            }
          },
          {
            "data": {
              "description": "Child Node 2"
            }
          }
        ]
      },
      {
        "data": {
          "description": "Node 2"
        }
      }
    ];
  }

  onNodeSelect(event: any) {
    console.log('Node selected:', this.selectedNode);
  }

  mostrarDialogo() {
    this.visible = true;
  }

  createNode() {
    this.visible = false;
    console.log('Node created:', this.selectedNode);
    //http post al NodeEntityController que acepte el id del nodo padre y el nombre del nodo a crear y la descripcion

  }

  onNodeExpand(node: TreeTableNode<any>) {
    console.log(node);
    //get hijos del nodo
  }
}
