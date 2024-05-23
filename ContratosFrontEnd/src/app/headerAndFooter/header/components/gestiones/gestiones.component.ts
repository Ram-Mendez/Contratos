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
      label: 'Gestiones', selectable: false,
      children: [
        {label: 'Crear Contrato', data: {path: 'gestiones/create-contract'}},
        {label: 'Editar Contratos', data: {path: 'gestiones/contracts'}},
      ]
    },

    {
      label: 'Contratantes', selectable: false,
      children: [
        {label: 'Crear Entidad', data: {path: 'gestiones/create-contractor'}},
        {label: 'Listar Entidades', data: {path: 'gestiones/contractors'}},
      ]
    },
    {
      label: 'Autoridades', selectable: false,
      children: [
        {label: 'Crear Autoridad', data: {path: 'gestiones/create-authority'}},
        {label: 'Listar Autoridades', data: {path: 'gestiones/authorities'}},
      ]
    },
  ];


  onNodeSelect(event: any) {
    const currentRoutePath = this.route.snapshot.url.map(segment => segment.path);
    this.router.navigate([event.node.data.path]);
  }
}
