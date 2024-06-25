import {Component, OnInit} from '@angular/core';
import {EntidadAutoridadService} from "../../service/entidad-autoridad.service";
import {Autoridad} from "../../service/autoridad";
import {ConfirmationService, MessageService} from "primeng/api";
import {EntidadContratanteService} from "../../../entidadContratante/service/entidad-contratante.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './entidades-autoridad.component.html',
  styleUrl: './entidades-autoridad.component.css'
})
export class EntidadesAutoridadComponent implements OnInit {
  autoridades: Autoridad[] = [];
  isAutoridadSelected: boolean = false;
  id: any;


  selectedAutoridad!: Autoridad;

  constructor(private autoridadService: EntidadAutoridadService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private contratanteService: EntidadContratanteService,
              private router: Router) {
  }

  ngOnInit() {
    this.getEntidadesAutoridades();
  }

  getEntidadesAutoridades() {
    this.autoridadService.getEntidadesAutoridades().subscribe(
      response => {
        this.autoridades = response;
      },
      error => {
        console.log(error, 'No se ha podido obtener las entidades autoridades');
      }
    );
  }

  editAutoridad() {
    this.contratanteService.getEntidadContratanteById(this.id).subscribe( () => {
      this.router.navigate(['/administration/edit-authority', this.id])
    })
  }

  deleteEntidadAutoridad() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this authority entity? This action is permanent.',
      header: 'Delete Authority Entity',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.autoridadService.deleteEntidadAutoridad(this.id).subscribe(
          () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Deleting Authority',
              icon: 'pi pi-spin pi-spinner'
            });
            console.log('Entidad autoridad eliminada');
            this.getEntidadesAutoridades();
          },
          error => {
            console.log(error, 'No se ha podido eliminar la entidad autoridad');
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to delete authority entity.',
              icon: 'pi pi-exclamation-triangle'
            });
          }
        );
      },
      reject: () => {
        // Any action you want to do on reject
      },
    });
  }


  onRowSelect(event: any) {
    console.log(event);
    this.isAutoridadSelected = true;
    this.id = event.data.id;
  }

  onRowUnselect(event: any) {
    this.isAutoridadSelected = false;
  }
}

