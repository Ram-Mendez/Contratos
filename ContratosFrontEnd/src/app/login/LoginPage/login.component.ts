import {Component} from '@angular/core';
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
export class LoginComponent {
  constructor(private fb: FormBuilder,
              private messageService: MessageService,
              private loginService: LoginService, private router: Router) {
  }

  loginForm = this.fb.group({
    email: ['RamMendezGomez@google.com', [Validators.required, Validators.email]],
    password: ['1234', [Validators.required, Validators.minLength(4)]]
  });


  onLogin(): void {
    this.loginService.verifyLogin(this.loginForm.value as User).subscribe(
      (isValid: boolean) => {
        if (isValid) {
          this.loginService.setEmail(this.loginForm.value.email as string);
          this.messageService.add({
            severity: 'success',
            summary: 'Login Successful',
            detail: 'You have successfully logged in.',
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
