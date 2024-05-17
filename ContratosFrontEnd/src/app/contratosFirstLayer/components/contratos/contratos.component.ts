import {Component, OnInit} from '@angular/core';
import {ContratosService} from "../../services/contratos.service";
import {Contratos} from "../../services/contratos";

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrl: './contratos.component.css'
})
export class ContratosComponent implements OnInit {

  constructor(private contratosService: ContratosService) {
  }





  ngOnInit() {
  }

}
