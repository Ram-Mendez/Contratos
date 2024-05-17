import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './LoginPage/login.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CreateUserComponent } from './CreateUser/create-user.component';
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    LoginComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
    RippleModule
  ],
})
export class LoginModule { }
