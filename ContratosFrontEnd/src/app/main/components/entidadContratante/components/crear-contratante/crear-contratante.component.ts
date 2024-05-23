
import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EntidadContratanteService} from "../../service/entidad-contratante.service";
import {Contratante} from "../../service/contratante";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  templateUrl: './crear-contratante.component.html',
  styleUrl: './crear-contratante.component.css'
})
export class CrearContratanteComponent {
  constructor(private fb: FormBuilder,
              private contratanteService: EntidadContratanteService,
              private messageService : MessageService,
              private router: Router) {
  }
  contratanteForm = this.fb.group({
    name: ['', [Validators.required, Validators.nullValidator]],
  });



  crearContratante() {
    this.contratanteService.createEntidadContratante(this.contratanteForm.value as Contratante).subscribe(
      (response) => {
        console.log({response});
        console.log("Entidad contratante creada.");
        this.messageService.add({
          severity: 'success',
          summary: 'Saving...Creating Contracting Entity',
          detail: 'Contracting entity created successfully.'
        });
        setTimeout(() => {
          this.router.navigate(['/gestiones/contractors']);
        }, 1500)
      },
      error => {
        console.log(error, 'No se ha podido crear la entidad contratante');
      }
    );
  }
}
