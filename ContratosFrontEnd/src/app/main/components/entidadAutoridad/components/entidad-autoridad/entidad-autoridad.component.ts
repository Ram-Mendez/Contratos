import {Component, OnDestroy, OnInit} from '@angular/core';
import {EntidadAutoridadService} from "../../service/entidad-autoridad.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {Autoridad} from "../../service/autoridad";

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
  });


  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      this.autoridadService.getEntidadAutoridadById(this.id).subscribe(autoridad => {
        this.autoridad = autoridad;
        if (autoridad) {
          this.autoridadForm.patchValue({
            name: this.autoridad.name,
          });
        }
      })
    })
  }

  editAutoridad() {
    const updatedAutoridad: any = {
      ...this.autoridadForm.value,
      id: this.id
    };

    this.autoridadService.editEntidadAutoridad(this.id, updatedAutoridad).subscribe(
      (response) => {
        console.log({response});
        console.log("Autoridad actualizada.");
        this.messageService.add({
          severity: 'success',
          summary: 'Saving...Updating Authority',
          detail: 'Authority updated successfully.'
        });
        setTimeout(() => {
          this.router.navigate(['/gestiones/authorities']);
        }, 1500);
      }
    );
  }

  ngOnDestroy() {
  }
}
