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
    // {label: 'Contrato',selectable: false, children: [  ]},
    {
      label: 'Entidad Contratante', data: {}
    },
  ];


  onNodeSelect(event: any) {
    const currentRoutePath = this.route.snapshot.url.map(segment => segment.path);
    this.router.navigate([...currentRoutePath, event.node.data.path]);
  }
}
