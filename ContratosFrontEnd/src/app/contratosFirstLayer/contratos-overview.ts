import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login/services/login.service";

@Component({
  templateUrl: './contratos-overview.html',
  styleUrl: './contratos-overview.css'
})
export class ContratosOverview implements OnInit {
  emailInConsole: string = '';

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.emailInConsole = this.loginService.email;
    console.log(this.emailInConsole);
  }
}
