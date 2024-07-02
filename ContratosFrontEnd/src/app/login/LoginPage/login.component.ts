import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {User} from "../user";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private messageService: MessageService,
              private loginService: LoginService, private router: Router) {
  }

  loginForm = this.fb.group({
    email: ['RamMendezGomez@google.com', [Validators.required, Validators.email]],
    password: ['1234', [Validators.required, Validators.minLength(4)]]
  });

  ngOnInit() {
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['/home']);
    }

  }


  onLogin(): void {
    this.loginService.verifyLogin(this.loginForm.value as User).subscribe(
      (isValid: boolean) => {
        if (isValid) {
          const email = this.loginForm.value.email as string
          this.loginService.setEmail(email);
          localStorage.setItem('userEmail', email);
          this.messageService.add({
            severity: 'success',
            summary: 'Login successful',
            icon: 'pi pi-spin pi-spinner'
          });
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1500);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Something went wrong',
            detail: 'Check email or password',
            icon: 'pi-exclamation-triangle'
          });
        }
      }
    );
  }


}
