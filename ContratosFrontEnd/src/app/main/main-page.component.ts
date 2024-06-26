import { Component, OnInit } from '@angular/core';
import {ContratoService} from "./components/contratosAll/service/contrato.service";
import {Contrato} from "./components/contratosAll/service/contrato";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  contratos: Contrato[] = [];
  isContractSelected : boolean = false;
  id: any;

  constructor(private contratosService: ContratoService,
              private router: Router) { }

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
  onRowSelect(event: any) {
    this.isContractSelected = true;
    this.id = event.data.id;
  }

  onRowUnselect(event: any) {
    this.isContractSelected = false;
  }

  viewDetails() {
    this.router.navigate(['/gestiones' , this.id]);

  }
}
