import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { EntidadContratanteService } from "../../service/entidad-contratante.service";
import { Contratante } from "../../service/contratante";

@Component({
  templateUrl: './entidad-contratante.component.html',
  styleUrls: ['./entidad-contratante.component.css']
})
export class EntidadContratanteComponent implements OnInit, OnDestroy {

  contratante!: Contratante;
  id: any;

  contratanteForm = this.fb.group({
    name: ['', [Validators.required, Validators.nullValidator]],
  });

  constructor(private contratanteService: EntidadContratanteService, private route: ActivatedRoute,
              private fb: FormBuilder, private router: Router, private messageService: MessageService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.contratanteService.getEntidadContratanteById(this.id).subscribe(contratante => {
        console.log(contratante);
        this.contratante = contratante;
        if (this.contratante) {
          this.contratanteForm.patchValue({
            name: this.contratante.name,
          });
        }
      });
    });
  }

  editContratante() {
    const updatedContratante: any = {
      ...this.contratanteForm.value,
      id: this.id
    };

    this.contratanteService.editEntidadContratante(this.id, updatedContratante).subscribe(
      (response) => {
        console.log({ response });
        console.log("Contratante actualizado.");
        this.messageService.add({
          severity: 'success',
          summary: 'Updating Contractor',
          icon: 'pi pi-spin pi-spinner'
        });
        setTimeout(() => {
          this.router.navigate(['/administration/list-contractors']);
        }, 1500);
      },
      error => {
        console.log(error, 'No se ha podido actualizar el contratante');
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to update contractor.',
          icon: 'pi pi-exclamation-triangle'
        });
      }
    );
  }


  ngOnDestroy() {
    // Add any necessary cleanup code here
  }
}
