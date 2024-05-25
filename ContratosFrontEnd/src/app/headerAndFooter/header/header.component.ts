import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../login/services/login.service";
import {MenuItem} from "primeng/api";
import { Contrato } from '../../main/components/contratosAll/service/contrato';
import {ContratoService} from "../../main/components/contratosAll/service/contrato.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Corrección aquí para 'styleUrls'
})
export class HeaderComponent implements OnInit {
  filteredContratos: Contrato[] = [];

  items: MenuItem[] | undefined;

  constructor(public loginService: LoginService,
              private contratoService: ContratoService) {
  }

  ngOnInit() {

    this.items = [
      {
        label: 'Login',
        icon: 'pi pi-sign-in',
        route: '/login'
      },
      {
        label: '',
        icon: 'pi pi-home',
        route: '/home'
      },
      {
        label: 'About Us',
        icon: 'pi pi-users',
        route: '/about-page'
      },
      {
        label: 'Configuration',
        icon: 'pi pi-spin pi-cog',
        items: [
          {
            label: '',
            icon: 'pi pi-server',
            route : '/gestiones'
          },

        ]
      },
      {
        label: 'Support',
        icon: 'pi pi-envelope',
        route: '/contact-page'
      }
    ]

  }

  logOut() {
    this.loginService.isUserLoggedIn = false;
    this.loginService.setEmail('');
  }

}
