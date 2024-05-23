import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EntidadAutoridadService} from "../../service/entidad-autoridad.service";
import {Autoridad} from "../../service/autoridad";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  templateUrl: './crear-autoridad.component.html',
  styleUrl: './crear-autoridad.component.css'
})
export class CrearAutoridadComponent {
  constructor(private fb: FormBuilder,
              private autoridadService: EntidadAutoridadService,
              private router: Router,
              private messageService : MessageService) {
  }

  autoridadForm = this.fb.group({
    name: ['', [Validators.required, Validators.nullValidator]]
  });
  crearAutoridad() {
    this.autoridadService.createEntidadAutoridad(this.autoridadForm.value as Autoridad).subscribe(
      (response) => {
        console.log({response});
        console.log("Entidad autoridad creada.");
        this.messageService.add({
          severity: 'success',
          summary: 'Saving...Creating Authority Entity',
          detail: 'Authority entity created successfully.'
        });
        setTimeout(() => {
          this.router.navigate(['/gestiones/authorities']);
        }, 1500)
      },
      error => {
        console.log(error, 'No se ha podido crear la entidad autoridad');
      }
    );
  }
}
