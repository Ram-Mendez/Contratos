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
import {GestionesComponent} from "./main/components/gestiones/gestiones.component";
import {TreeModule} from "primeng/tree";
import { AboutUsComponent } from './headerAndFooter/header/components/about-us/about-us.component';
import {RippleModule} from "primeng/ripple";
import { AdministracionComponent } from './headerAndFooter/header/components/administracion/administracion.component';
import { EditUserComponent } from './headerAndFooter/header/components/administracion/components/users/edit-user/edit-user.component';
import { ListUsersComponent } from './headerAndFooter/header/components/administracion/components/users/list-users/list-users.component';
import { AddUserComponent } from './headerAndFooter/header/components/administracion/components/users/create-user/add-user.component';
import { CreateRolesRightsComponent } from './headerAndFooter/header/components/administracion/components/roles/create-roles-rights/create-roles-rights.component';
import { EditRolesRightsComponent } from './headerAndFooter/header/components/administracion/components/roles/edit-roles-rights/edit-roles-rights.component';
import { ListRolesRightsComponent } from './headerAndFooter/header/components/administracion/components/roles/list-roles-rights/list-roles-rights.component';
import {FloatLabelModule} from "primeng/floatlabel";
import {TableModule} from "primeng/table";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {MultiSelectModule} from "primeng/multiselect";
import { CreateAdministratorComponent } from './headerAndFooter/header/components/administracion/components/administrator/create-administrator/create-administrator.component';
import { EditAdministratorComponent } from './headerAndFooter/header/components/administracion/components/administrator/edit-administrator/edit-administrator.component';
import { ListAdministratorsComponent } from './headerAndFooter/header/components/administracion/components/administrator/list-administrators/list-administrators.component';
import {DropdownModule} from "primeng/dropdown";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactPageComponent,
    GestionesComponent,
    AboutUsComponent,
    AdministracionComponent,
    EditUserComponent,
    ListUsersComponent,
    AddUserComponent,
    CreateRolesRightsComponent,
    EditRolesRightsComponent,
    ListRolesRightsComponent,
    CreateAdministratorComponent,
    EditAdministratorComponent,
    ListAdministratorsComponent,
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
    FloatLabelModule,
    TableModule,
    ConfirmDialogModule,
    MultiSelectModule,
    DropdownModule,

  ],
  providers: [MessageService, ConfirmationService,],
    exports: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
