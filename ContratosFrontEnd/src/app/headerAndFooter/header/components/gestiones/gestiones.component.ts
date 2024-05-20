import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TreeNode} from "primeng/api";

@Component({
  templateUrl: './gestiones.component.html',
  styleUrl: './gestiones.component.css'
})
export class GestionesComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  data: TreeNode[] = [
    {
      label: 'Contratos', selectable: false,
      children: [
        {label: 'Crear Contrato', data: {path: 'gestiones/crear-contrato'}},
        {label: 'Editar Contratos', data: {path: 'gestiones/contratos'}},
      ]
    },

    {
      label: 'Entidad Contratante', selectable: false,
      children: [
        {label: 'Crear Entidad', data: {}},
        {label: 'Listar Entidad', data: {path: 'gestiones/contractors'}},
      ]
    },
    {
      label: 'Autoridades', selectable: false,
      children: [
        {label: 'Crear Autoridad', data: {}},
        {label: 'Listar Autoridades', data: {}},
      ]
    },
  ];


  onNodeSelect(event: any) {
    const currentRoutePath = this.route.snapshot.url.map(segment => segment.path);
    this.router.navigate([event.node.data.path]);
  }
}
