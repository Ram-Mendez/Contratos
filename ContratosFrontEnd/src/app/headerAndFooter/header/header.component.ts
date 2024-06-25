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

  items: MenuItem[] | undefined;

  constructor(public loginService: LoginService,
              private contratoService: ContratoService) {
  }

  ngOnInit() {



    this.items = [
      {
        label: 'Home',
        // icon: 'pi pi-home',
        route: '/home'
      },
      {
        label: 'Administration',
        // icon: 'pi pi-building',
        route: '/administration/list-authorities'

      },
      // {
      //   label: 'About Us',
      //   icon: 'pi pi-fw pi-info-circle', // Changed icon here
      //   route: '/about-page'
      // },
      // {
      //   label: 'Support',
      //   icon: 'pi pi-envelope',
      //   route: '/contact-page'
      // },
      // {
      //   label: 'Login',
      //   icon: 'pi pi-sign-in',
      //   route: '/login'
      // }
    ]
  }

  logOut() {
    this.loginService.isUserLoggedIn = false;
    this.loginService.setEmail('');
  }

}
