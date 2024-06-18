import {Component, OnInit} from '@angular/core';
import {TreeNode} from "primeng/api";


@Component({
  selector: 'app-contrato-inventory',
  templateUrl: './contrato-inventory.component.html',
  styleUrl: './contrato-inventory.component.css'
})
export class ContratoInventoryComponent implements OnInit {
  files!: TreeNode[];
  selectedNode!: TreeNode;

  constructor() {}

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

  crearNodo() {

  }
}
