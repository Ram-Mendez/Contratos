import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/LoginPage/login.component";
import {CreateUserComponent} from "./login/CreateUser/create-user.component";
import {ContratoComponent} from "./main/components/contratosAll/contrato/contrato.component";
import {CreateContratoComponent} from "./main/components/contratosAll/createContrato/create-contrato.component";
import {GestionesComponent} from "./main/components/gestiones/gestiones.component";
import {ContactPageComponent} from "./headerAndFooter/header/components/contactUs/contact-page/contact-page.component";
import {ContratosComponent} from "./main/components/contratosAll/contratos/contratos.component";
import {AboutUsComponent} from "./headerAndFooter/header/components/about-us/about-us.component";
import {AdministracionComponent} from "./headerAndFooter/header/components/administracion/administracion.component";
import {
  CrearAutoridadComponent
} from "./main/components/entidadAutoridad/components/crear-autoridad/crear-autoridad.component";
import {
  EntidadesAutoridadComponent
} from "./main/components/entidadAutoridad/components/entidades-autoridad/entidades-autoridad.component";
import {
  EditUserComponent
} from "./headerAndFooter/header/components/administracion/components/users/edit-user/edit-user.component";
import {
  ListUsersComponent
} from "./headerAndFooter/header/components/administracion/components/users/list-users/list-users.component";
import {
  AddUserComponent
} from "./headerAndFooter/header/components/administracion/components/users/create-user/add-user.component";
import {
  CreateRolesRightsComponent
} from "./headerAndFooter/header/components/administracion/components/roles/create-roles-rights/create-roles-rights.component";
import {
  EntidadAutoridadComponent
} from "./main/components/entidadAutoridad/components/entidad-autoridad/entidad-autoridad.component";
import {
  ListRolesRightsComponent
} from "./headerAndFooter/header/components/administracion/components/roles/list-roles-rights/list-roles-rights.component";
import {
  EditRolesRightsComponent
} from "./headerAndFooter/header/components/administracion/components/roles/edit-roles-rights/edit-roles-rights.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: CreateUserComponent},
  {path: 'contact-page', component: ContactPageComponent},
  {path: 'about-page', component: AboutUsComponent},
  {path: 'home', component: ContratosComponent},
  {path: 'contratos', component: ContratosComponent},
  {path: 'create-contract', component: CreateContratoComponent},
  {
    path: 'administration', component: AdministracionComponent, children: [
      {path: 'create-authority', component: CrearAutoridadComponent},
      {path: 'edit-authority/:id', component: EntidadAutoridadComponent},
      {path: 'list-authorities', component: EntidadesAutoridadComponent},
      {path: 'create-user', component: AddUserComponent},
      {path: 'edit-user/:id', component: EditUserComponent},
      {path: 'list-users', component: ListUsersComponent},
      {path: 'create-role', component: CreateRolesRightsComponent},
      {path: 'list-roles', component: ListRolesRightsComponent},
      {path: 'edit-role/:id', component: EditRolesRightsComponent},
    ]
  },
  {
    path: 'gestiones/:id', component: GestionesComponent,
    children: [
      {path: '', component: ContratoComponent} // Cargar ContratoComponent por defecto
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
