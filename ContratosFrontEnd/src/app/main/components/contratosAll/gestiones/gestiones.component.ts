import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TreeNode } from "primeng/api";
import { ContratoService } from "../service/contrato.service";

@Component({
  templateUrl: './gestiones.component.html',
  styleUrls: ['./gestiones.component.css']
})
export class GestionesComponent implements OnInit {
  contrato: any;

  constructor(private router: Router, private route: ActivatedRoute, private contratoService: ContratoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log("ID del contrato:", id);
      this.contratoService.getContratoById(id).subscribe(
        contrato => {
          this.contrato = contrato;
          console.log("Datos del contrato:", contrato);
        },
        error => {
          console.error("Error al obtener el contrato:", error);
          this.router.navigate(['/contratos']);
        }
      );
    });
  }

  data: TreeNode[] = [
    {
      label: 'Gestiones', selectable: false, expanded: true,
      children: [
        { label: 'Editar Contratos', data: { path: '', icon: 'pi pi-pencil' }, expanded: true },
      ]
    },
  ];
}
