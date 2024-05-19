import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {LoginModule} from "./login/login.module";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenubarModule} from "primeng/menubar";
import { FooterComponent } from './headerAndFooter/footerView/footer/footer.component';
import {HeaderComponent} from "./headerAndFooter/header/header.component";
import {MainModule} from "./main/main.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    LoginModule,
    ToastModule,
    BrowserAnimationsModule,
    MenubarModule,
    MainModule,

  ],
  providers: [MessageService, ConfirmationService],
    exports: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
