import {Component, OnInit} from '@angular/core';
import {TreeNode} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrl: './contrato.component.css'
})
export class ContratoComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  data: TreeNode[] = [
    // {label: 'Contrato',selectable: false, children: [  ]},
    {label: 'Editar Contrato', data: {path: 'editar-contrato'}
    },
  ];

  ngOnInit() {
  }

  onNodeSelect(event: any) {
    const currentRoutePath = this.route.snapshot.url.map(segment => segment.path);
    this.router.navigate([...currentRoutePath, event.node.data.path]);
  }


}
