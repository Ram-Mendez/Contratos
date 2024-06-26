import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {ContratoService} from "../service/contrato.service";
import {FormBuilder, Validators} from "@angular/forms";
import {formatDate} from "@angular/common";
import {EntidadContratanteService} from "../../entidadContratante/service/entidad-contratante.service";
import {EntidadAutoridadService} from "../../entidadAutoridad/service/entidad-autoridad.service";
import {Contrato} from "../service/contrato";

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit, OnDestroy {
  contrato!: any;
  contratante!: any;
  contratantes!: any;
  autoridades!: any;
  unsubscribe: any;

  constructor(private contratanteService: EntidadContratanteService, private autoridadService: EntidadAutoridadService,
              private route: ActivatedRoute, private contratoService: ContratoService,
              private fb: FormBuilder, private router: Router, private messageService: MessageService) {
  }

  editContractForm = this.fb.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    startDate: ['', [Validators.required, Validators.nullValidator]],
    contractingEntity: ['', [Validators.required, Validators.nullValidator]],
    authorityEntity: ['', [Validators.required, Validators.nullValidator]],
  });




  ngOnInit() {
    this.unsubscribe = this.route.parent?.params.subscribe(params => {
      const id = params['id'];
      this.contratoService.getContratoById(id).subscribe(contrato => {
        this.contrato = contrato;

        this.editContractForm.setValue({
          name: this.contrato.name,
          startDate: formatDate(this.contrato.creationDate, 'yyyy-MM-dd', 'en'),
          contractingEntity: this.contrato.contractingEntity.id,
          authorityEntity: this.contrato.authorityEntity.id
        });
      });
    });
    this.contratanteService.getEntidadesContratantes().subscribe(
      contratantes => {
        this.contratantes = contratantes;
      }
    );
    this.autoridadService.getEntidadesAutoridades().subscribe(
      autoridades => {
        this.autoridades = autoridades;
      }
    );
  }

  editContract() {
    if (this.editContractForm.valid) {
      this.contratoService.editContrato(this.contrato.id, this.editContractForm.value as Contrato).subscribe(
        (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Saving',
            icon: 'pi pi-spin pi-spinner'
          });
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1500); // Delay before redirecting to /home
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to update contract.',
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

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }
}
