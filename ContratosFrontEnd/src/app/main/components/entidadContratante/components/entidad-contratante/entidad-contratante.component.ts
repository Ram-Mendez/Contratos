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
        console.log({response});
        console.log("Contratante actualizado.");
        this.messageService.add({
          severity: 'success',
          summary: 'Saving...Updating Contractor',
          detail: 'Contractor updated successfully.'
        });
        setTimeout(() => {
          this.router.navigate(['/gestiones/contractors']);
        }, 1500);
      }
    );
  }

  ngOnDestroy() {
    // Add any necessary cleanup code here
  }
}
