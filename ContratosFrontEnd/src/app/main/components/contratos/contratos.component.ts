import {Component, OnInit} from '@angular/core';
import {ContratoService} from "../../services/contrato.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Contrato} from "../../services/models/contrato";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrl: './contratos.component.css'
})
export class ContratosComponent implements OnInit {
  contratos: Contrato[] = [];
  contrato!: Contrato;
  id: any;
  isContractSelected: boolean = false;
  name : any;
  sortField: string = '';
  sortOrder: number = 1;

  constructor(private contratosService: ContratoService,
              private messageService: MessageService,
              private router: Router,
              private confirmationService:  ConfirmationService) {
  }

  ngOnInit() {
    this.getContratos()
  }

  getContratos() {
    this.contratosService.getContratos().subscribe(
      data => {
        console.log(data);
        this.contratos = data;
      }
    );
  }

  editContrato() {
    this.contratosService.getContratoById(this.id).subscribe(
      () => {
        this.router.navigate(['/contrato', this.id]);
      }
    );
  }

  deleteContrato() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this contract? This action is permanent.',
      header: 'Delete Contract',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.contratosService.deleteContrato(this.id).subscribe(
          () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Deleting Contract...',
              detail: 'Contract deleted successfully.'
            })
            console.log('Contrato eliminado')
            this.getContratos();
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

