import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {LoginModule} from "./login/login.module";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenubarModule} from "primeng/menubar";
import { ContratosOverview } from './contratosFirstLayer/contratos-overview';
import {ContratosModule} from "./contratosFirstLayer/contratos.module";
import { FooterComponent } from './footerView/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContratosOverview,
    FooterComponent,

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
    ContratosModule,
  ],
  providers: [MessageService,],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
