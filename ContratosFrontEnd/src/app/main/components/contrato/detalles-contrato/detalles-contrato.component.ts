import {Component, OnDestroy, OnInit} from '@angular/core';
import {Contrato} from "../../../services/contrato";
import {ActivatedRoute, Router} from "@angular/router";
import {ContratoService} from "../../../services/contrato.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {formatDate} from "@angular/common";
import {Subject} from "rxjs";

@Component({
  selector: 'app-detalles-contrato',
  templateUrl: './detalles-contrato.component.html',
  styleUrl: './detalles-contrato.component.css'
})
export class DetallesContratoComponent implements OnInit, OnDestroy {

  contrato!: any;
  unsubscribe: any;

  constructor(private route: ActivatedRoute, private contratoService: ContratoService,
              private fb: FormBuilder, private router: Router, private messageService: MessageService) {
  }

  editContractForm = this.fb.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    creationDate: ['', [Validators.required, Validators.nullValidator]],
    contractingEntity: ['', [Validators.required, Validators.nullValidator]],
    authorityEntity: ['', [Validators.required, Validators.nullValidator]],
  });

  ngOnInit() {
    this.unsubscribe = this.route.parent?.params.subscribe(params => {

      const id = params['id'];
      console.log(id);
      console.log(params);
      this.contratoService.getContratoById(id).subscribe(contrato => {
        console.log(contrato);
        this.contrato = contrato;

        this.editContractForm.setValue({
          name: this.contrato.name,
          creationDate: formatDate(this.contrato.creationDate, 'yyyy-MM-dd', 'en'),
          contractingEntity: this.contrato.contractingEntity.name,
          authorityEntity: this.contrato.authorityEntity.name
        })
      })
    })
  }

  editContract() {
    this.contratoService.updateContrato(this.contrato.id, this.editContractForm.value as Contrato).subscribe(
      (response) => {
        console.log({response});
        console.log("Contrato actualizado.");
        this.messageService.add({
          severity: 'success',
          summary: 'Saving...Updating Contract',
          detail: 'Contract updated successfully.'
        });
        setTimeout(() => {
          this.router.navigate(['/main']);
        }, 1500)
      }
    );

  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();

  }
}
