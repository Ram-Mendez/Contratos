import {Component, OnInit} from '@angular/core';
import {EntidadContratanteService} from "../../service/entidad-contratante.service";
import {Contratante} from "../../service/contratante";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  templateUrl: './entidad-contratante.component.html',
  styleUrl: './entidad-contratante.component.css'
})
export class EntidadContratanteComponent implements OnInit {
  contratantes: Contratante[] = [];
  id : any
  isContractSelected: boolean = false;


  constructor(private contratanteService: EntidadContratanteService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {

  }

  getEntidadesContratantes() {
    this.contratanteService.getEntidadesContratantes().subscribe(
      data => {
        this.contratantes = data;
                                                               //filtrar por nombres unicos.

        console.log(this.contratantes);
      }
    );
  }
  createContratante() {

  }

  editContratante() {

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
              detail: 'Contract deleted successfully.'
            })
            console.log('Contrato eliminado')
            this.getEntidadesContratantes();
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
