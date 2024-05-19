import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../login/services/login.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
    // this.items = [
    //   {
    //     label: 'Configuration',
    //     icon: 'pi pi-cog',
    //     items: [
    //       {
    //         label: 'Gestiones',
    //         icon: 'pi pi-bolt',
    //         route: '/gestiones'
    //       },
    //       {
    //         label: 'Contratos',
    //         icon: 'pi pi-bolt',
    //         route: '/main'
    //       },
    //
    //     ]
    //   },
    //
    // ]
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/main'
      },
      {
        label: 'Configuration',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Contratos',
            icon: 'pi pi-bolt',
            route: '/main'
          },
          {
            label: 'Gestiones',
            icon: 'pi pi-server',
            route : '/gestiones'
          },

        ]
      },
      {
        label: 'Contact Us',
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
