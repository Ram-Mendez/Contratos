import {Component, OnInit, Input} from '@angular/core';
import {ContratoService} from "../service/contrato.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Contrato} from "../service/contrato";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {
  @Input() contratos: Contrato[] = [];
  contrato!: Contrato;
  id: any;
  isContractSelected: boolean = false;
  name: any;


  constructor(private contratosService: ContratoService,
              private messageService: MessageService,
              private router: Router,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.getContratos();
  }

  getContratos() {
    this.contratosService.getContratos().subscribe(
      data => {
        this.contratos = data;
      }
    );
  }

  crearContrato() {
    this.router.navigate(['/create-contract']);
  }

  editContrato() {
    this.contratosService.getContratoById(this.id).subscribe(
      () => {
        this.router.navigate(['/gestiones/', this.id]);
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
              summary: 'Deleting Contract',
              icon: 'pi pi-spin pi-spinner'
            });
            setTimeout(
              () => {
                this.getContratos();
              }, 1500
            )
          },
          (error) => {
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
    this.isContractSelected = true;
    this.id = event.data.id;
  }

  onRowUnselect(event: any) {
    this.isContractSelected = false;
  }
}
