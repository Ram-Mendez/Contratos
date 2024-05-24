import {Component, OnInit} from '@angular/core';
import {EntidadContratanteService} from "../../service/entidad-contratante.service";
import {Contratante} from "../../service/contratante";
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  templateUrl: './entidades-contratantes.component.html',
  styleUrl: './entidades-contratantes.component.css'
})
export class EntidadesContratantesComponent implements OnInit {
  contratantes: Contratante[] = [];
  id: any
  isContractSelected: boolean = false;


  constructor(private contratanteService: EntidadContratanteService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private router: Router) {
  }

  ngOnInit() {
    this.getEntidadesContratantes();


  }

  getEntidadesContratantes() {
    this.contratanteService.getEntidadesContratantes().subscribe(
      data => {
        this.contratantes = data;
        //filtrar por nombres unicos
        console.log(this.contratantes);
      }
    );
  }

  editContratante() {
    this.contratanteService.getEntidadContratanteById(this.id).subscribe(
      () => {
        this.router.navigate(['/gestiones/contractor', this.id]);
      })


  }

  deleteContratante() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this contract? This action is permanent.',
      header: 'Delete Contract',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.contratanteService.deleteEntidadContratante(this.id).subscribe(
          () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Deleting Contract...',
              detail: 'Contract deleted successfully.',
              icon: 'pi pi-spin pi-spinner'
            });
            console.log('Contrato eliminado');
            this.getEntidadesContratantes();
          },
          error => {
            console.log(error, 'No se ha podido eliminar el contrato');
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to delete contract.',
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
    this.isContractSelected = true;
    this.id = event.data.id;
  }

  onRowUnselect(event: any) {
    this.isContractSelected = false;
  }
}
