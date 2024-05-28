import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ContratoService} from "../service/contrato.service";
import {Contrato} from "../service/contrato";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {EntidadContratanteService} from "../../entidadContratante/service/entidad-contratante.service";
import {EntidadAutoridadService} from "../../entidadAutoridad/service/entidad-autoridad.service";

@Component({
  templateUrl: './create-contrato.component.html',
  styleUrls: ['./create-contrato.component.css']
})
export class CreateContratoComponent implements OnInit {
  contrato : any;
  contratantes: any;
  autoridades: any;

  constructor(private fb: FormBuilder,
              private contratoService: ContratoService,
              private router: Router,
              private messageService: MessageService,
              private contratanteService: EntidadContratanteService,
              private autoridadService: EntidadAutoridadService) {
  }

  createContractForm = this.fb.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    creationDate: ['', [Validators.required, Validators.nullValidator]],
    contractingEntity: ['', [Validators.required, Validators.nullValidator]],  // Updated to match backend field
    authorityEntity: ['', [Validators.required, Validators.nullValidator]],  // Updated to match backend field
  });

  ngOnInit() {
    this.contratanteService.getEntidadesContratantes().subscribe(contratantes => {
      this.contratantes = contratantes;
    });
    this.autoridadService.getEntidadesAutoridades().subscribe(autoridades => {
      this.autoridades = autoridades;
    });
  }

  createContract() {
    if (this.createContractForm.valid) {
      this.contratoService.createContrato(this.createContractForm.value as Contrato).subscribe(
        (response) => {
          console.log({response});
          console.log("Contrato creado.");
          this.messageService.add({
            severity: 'success',
            summary: 'Creating Contract',
            icon: 'pi pi-spin pi-spinner'
          });
          setTimeout(() => {
            this.router.navigate(['contratos']);
          }, 1500);
        },
        (error) => {
          console.error('Error creating contract', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to create contract.',
            icon: 'pi pi-exclamation-triangle'
          });
        }
      );
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Validation Error',
        detail: 'Please fill out all required fields.',
        icon: 'pi pi-exclamation-triangle'
      });
    }
  }
}
