import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../login/services/login.service";
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;
  userEmail: string | null = null;


  constructor(public loginService: LoginService, private router: Router
  ) {
  }

  ngOnInit() {
    localStorage.getItem('userEmail')


    this.items = [
      {
        label: 'Home',
        route: '/home'
      },
      {
        label: 'Administration',
        route: '/administration/list-authorities'

      },

    ]
  }

  logOut(): void {
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }

}
