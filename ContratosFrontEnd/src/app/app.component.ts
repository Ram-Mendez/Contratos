import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login/services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.isUserLoggedIn();
  }
}
