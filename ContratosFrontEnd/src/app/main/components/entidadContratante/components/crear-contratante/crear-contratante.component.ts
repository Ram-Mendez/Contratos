
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
        this.messageService.add({
          severity: 'success',
          summary: 'Creating contractor',
          icon: 'pi pi-spin pi-spinner'
        });
        setTimeout(() => {
          this.router.navigate(['/administration/list-contractors']);
        }, 1500);
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to create contracting entity.',
          icon: 'pi pi-exclamation-triangle'
        });
      }
    );
  }

}
