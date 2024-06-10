import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TreeNode} from "primeng/api";
import {ContratoService} from "../contratosAll/service/contrato.service";

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
      label: 'Gestiones', selectable: false, expanded: true, expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {label: 'Editar Contrato', data: {path: 'editar-contrato', icon: 'pi pi-pencil'}, expanded: true},
        {label: 'Inventario', data: {path: 'inventario', icon: 'pi pi-list'}, expanded: true},
      ]
    },
  ];

  ngOnInit() {
 this.unsubscribe =   this.route.params.subscribe(params => {
      const id = params['id'];
      console.log("ID del contrato:", id);
      this.contratoService.getContratoById(id).subscribe(
        contrato => {
          this.contrato = contrato;
          console.log("Datos del contrato:", contrato);
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
