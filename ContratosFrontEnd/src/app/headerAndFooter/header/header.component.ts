import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../login/services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

  logOut() {
    this.loginService.isUserLoggedIn = false;
    this.loginService.setEmail('');
  }
}
