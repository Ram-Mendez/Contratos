import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { User } from "../user";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(private fb: FormBuilder, private loginService: LoginService,
              private router: Router, private messageService: MessageService) {
  }

  createUserForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })

  onCreateAccount() {
    this.loginService.createUser(this.createUserForm.value as User).subscribe(
      () => {
        if (this.createUserForm.valid) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: "You've created your account", icon: 'pi pi-spin pi-spinner'
          });
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1500);
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Check email or password', icon: 'pi-exclamation-triangle' });
        }
      });
  }
}
