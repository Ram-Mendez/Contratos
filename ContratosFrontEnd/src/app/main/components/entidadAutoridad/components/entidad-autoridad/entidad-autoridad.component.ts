import { Component, OnDestroy, OnInit } from '@angular/core';
import { EntidadAutoridadService } from "../../service/entidad-autoridad.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { Autoridad } from "../../service/autoridad";

@Component({
  templateUrl: './entidad-autoridad.component.html',
  styleUrl: './entidad-autoridad.component.css'
})
export class EntidadAutoridadComponent implements OnInit, OnDestroy {
  autoridad!: Autoridad;
  id: any;

  constructor(private autoridadService: EntidadAutoridadService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private messageService: MessageService
  ) {
  }

  autoridadForm = this.fb.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    cifDni: ['', [Validators.required, Validators.nullValidator]],
    address: ['', [Validators.required, Validators.nullValidator]],
    municipality: ['', [Validators.required, Validators.nullValidator]],
    zipCode: ['', [Validators.required, Validators.nullValidator]],
    country: ['', [Validators.required, Validators.nullValidator]],
    phone: ['', [Validators.required, Validators.nullValidator]],
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.autoridadService.getEntidadAutoridadById(this.id).subscribe(autoridad => {
        this.autoridad = autoridad;
        if (autoridad) {
          this.autoridadForm.patchValue({
            name: this.autoridad.name,
            cifDni: this.autoridad.cifDni,
            address: this.autoridad.address,
            municipality: this.autoridad.municipality,
            zipCode: this.autoridad.zipCode,
            country: this.autoridad.country,
            phone: this.autoridad.phone,
          });
        }
      });
    });
  }

  editAutoridad() {
    const updatedAutoridad: any = {
      ...this.autoridadForm.value,
      id: this.id
    };

    this.autoridadService.editEntidadAutoridad(this.id, updatedAutoridad).subscribe(
      (response) => {
        console.log({ response });
        console.log("Autoridad actualizada.");
        this.messageService.add({
          severity: 'success',
          summary: 'Saving...Updating Authority',
          detail: 'Authority updated successfully.',
          icon: 'pi pi-spin pi-spinner'
        });
        setTimeout(() => {
          this.router.navigate(['administration/list-authorities']);
        }, 1500);
      },
      error => {
        console.log(error, 'No se ha podido actualizar la autoridad');
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to update authority.',
          icon: 'pi pi-exclamation-triangle'
        });
      }
    );
  }

  ngOnDestroy() {
  }
}
