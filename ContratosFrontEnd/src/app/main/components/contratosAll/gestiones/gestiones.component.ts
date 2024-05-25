import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TreeNode} from "primeng/api";
import {ContratoService} from "../service/contrato.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  templateUrl: './gestiones.component.html',
  styleUrls: ['./gestiones.component.css']
})
export class GestionesComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private contratoService: ContratoService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log("xxxxxxxxxxxx",  id);
      this.contratoService.getContratoById(id).subscribe(contrato => {
        }, error => {
      this.router.navigate(['/contratos'])
      }
      );
    });
  }


  data: TreeNode[] = [
    {
      label: 'Gestiones', selectable: false,
      children: [
        {label: 'Editar Contratos', data: {path: 'editar-contrato', icon: 'pi pi-pencil'}},
      ]
    },
  ]

}
