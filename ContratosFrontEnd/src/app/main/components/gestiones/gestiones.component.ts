import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TreeNode} from "primeng/api";
import {ContratoService} from "../contratosAll/service/contrato.service";
import {Subject} from "rxjs";
import {Contrato} from "../contratosAll/service/contrato";

@Component({
  templateUrl: './gestiones.component.html',
  styleUrls: ['./gestiones.component.css']
})
export class GestionesComponent implements OnInit, OnDestroy {
  contrato: any;
  unsubscribe: any;

  constructor(private router: Router, private route: ActivatedRoute, private contratoService: ContratoService) {
  }

  data: TreeNode[] = [
    {
      label: 'Procedures', selectable: false, expanded: true, expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {label: 'Edit Contract', data: {path: 'editar-contrato', icon: 'pi pi-pencil'}, expanded: true},
        {label: 'Inventory', data: {path: 'inventario/detalles', icon: 'pi pi-list'}, expanded: true},
      ]
    },
  ];

  ngOnInit() {
 this.unsubscribe =   this.route.params.subscribe(params => {
      const id = params['id'];
      this.contratoService.getContratoById(id).subscribe(
        contrato => {
          this.contrato = contrato;
        },
        error => {
          console.error("Error al obtener el contrato:", error);
        }
      );
    });
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }
}
