import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ContratoService} from "../../services/contrato.service";
import {Contrato} from "../../services/models/contrato";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  templateUrl: './create-contrato.component.html',
  styleUrl: './create-contrato.component.css'
})
export class CreateContratoComponent {

  constructor(private fb: FormBuilder,
              private contratoService: ContratoService,
              private router: Router,
              private messageService: MessageService) {
  }

  createContractForm = this.fb.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    creationDate: ['', [Validators.required, Validators.nullValidator]],
    contractingEntity: ['', [Validators.required, Validators.nullValidator]],  // Updated to match backend field
    authorityEntity: ['', [Validators.required, Validators.nullValidator]],  // Updated to match backend field
  });


  createContract() {
    this.contratoService.createContrato(this.createContractForm.value as Contrato).subscribe(
      (response) => {
        console.log({response});
        console.log("Contrato creado.");
        this.messageService.add({
          severity: 'success',
          summary: 'Saving...Creating Contract',
          detail: 'Contract created successfully.'
        });
        setTimeout(() => {
          this.router.navigate(['/main']);
        }, 1500)
      }

    );
  }
}
