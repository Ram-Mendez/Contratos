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
import { ContactPageComponent } from './headerAndFooter/header/components/contactUs/contact-page/contact-page.component';
import {NgOptimizedImage} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChipsModule} from "primeng/chips";
import {GestionesComponent} from "./main/components/contratosAll/gestiones/gestiones.component";
import {TreeModule} from "primeng/tree";
import { AboutUsComponent } from './headerAndFooter/header/components/about-us/about-us.component';
import { SearchBarComponent } from './headerAndFooter/header/components/search-bar/search-bar.component';
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactPageComponent,
    GestionesComponent,
    AboutUsComponent,
    SearchBarComponent
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
        NgOptimizedImage,
        ButtonModule,
        InputTextareaModule,
        ReactiveFormsModule,
        ChipsModule,
        TreeModule,
        RippleModule,

    ],
  providers: [MessageService, ConfirmationService,],
    exports: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
