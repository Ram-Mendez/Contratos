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
    name: ['', [Validators.required, Validators.nullValidator]],
    cifDni: ['', [Validators.required]],
    address: ['', [Validators.required]],
    municipality: ['', [Validators.required]],
    zipCode: ['', [Validators.required]],
    country: ['', [Validators.required]],
    phone: ['', [Validators.required, ]]
  });
  crearAutoridad() {
    this.autoridadService.createEntidadAutoridad(this.autoridadForm.value as Autoridad).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Creating Authority ',
          icon: 'pi pi-spin pi-spinner'
        });
        setTimeout(() => {
          this.router.navigate(['/administration/list-authorities']);
        }, 1500);
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to create authority entity.',
          icon: 'pi pi-exclamation-triangle'
        });
      }
    );
  }

}
