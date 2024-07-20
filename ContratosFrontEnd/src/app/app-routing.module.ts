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
import {
  CreateAdministratorComponent
} from "./headerAndFooter/header/components/administracion/components/administrator/create-administrator/create-administrator.component";
import {
  EditAdministratorComponent
} from "./headerAndFooter/header/components/administracion/components/administrator/edit-administrator/edit-administrator.component";
import {
  ListAdministratorsComponent
} from "./headerAndFooter/header/components/administracion/components/administrator/list-administrators/list-administrators.component";
import {
  CrearContratanteComponent
} from "./main/components/entidadContratante/components/crear-contratante/crear-contratante.component";
import {
  EntidadContratanteComponent
} from "./main/components/entidadContratante/components/entidad-contratante/entidad-contratante.component";
import {
  EntidadesContratantesComponent
} from "./main/components/entidadContratante/components/entidades-contratante/entidades-contratantes.component";
import {ContratoInventoryComponent} from "./main/components/contratosAll/inventario/contrato-inventory.component";
import {
  InventoryAmounts
} from "./main/components/contratosAll/inventario/amounts/inventory-amounts.component";
import {TotalTabComponent} from "./main/components/contratosAll/inventario/total/total-tab.component";
import {GestorArchivosComponent} from "./main/components/contratosAll/gestor-archivos/gestor-archivos.component";
import {authGuard} from "./login/services/auth.guard";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: CreateUserComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: 'about-page', component: AboutUsComponent },
  { path: 'home', component: ContratosComponent, canActivate: [authGuard] },
  { path: 'contratos', component: ContratosComponent, canActivate: [authGuard] },
  { path: 'create-contract', component: CreateContratoComponent, canActivate: [authGuard] },
  {
    path: 'administration', component: AdministracionComponent, canActivate: [authGuard], children: [
      { path: 'create-authority', component: CrearAutoridadComponent, canActivate: [authGuard] },
      { path: 'edit-authority/:id', component: EntidadAutoridadComponent, canActivate: [authGuard] },
      { path: 'create-contractor', component: CrearContratanteComponent, canActivate: [authGuard] },
      { path: 'edit-contractor/:id', component: EntidadContratanteComponent, canActivate: [authGuard] },
      { path: 'list-contractors', component: EntidadesContratantesComponent, canActivate: [authGuard] },
      { path: 'list-authorities', component: EntidadesAutoridadComponent, canActivate: [authGuard] },
      { path: 'create-user', component: AddUserComponent, canActivate: [authGuard] },
      { path: 'edit-user/:id', component: EditUserComponent, canActivate: [authGuard] },
      { path: 'list-users', component: ListUsersComponent, canActivate: [authGuard] },
      { path: 'create-role', component: CreateRolesRightsComponent, canActivate: [authGuard] },
      { path: 'list-roles', component: ListRolesRightsComponent, canActivate: [authGuard] },
      { path: 'edit-role/:id', component: EditRolesRightsComponent, canActivate: [authGuard] },
      { path: 'create-administrator', component: CreateAdministratorComponent, canActivate: [authGuard] },
      { path: 'edit-administrator/:id', component: EditAdministratorComponent, canActivate: [authGuard] },
      { path: 'list-administrators', component: ListAdministratorsComponent, canActivate: [authGuard] },
    ]
  },
  {
    path: 'gestiones/:id', component: GestionesComponent, canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'editar-contrato', pathMatch: 'full' },
      { path: 'editar-contrato', component: ContratoComponent, canActivate: [authGuard] },
      {
        path: 'inventario', component: ContratoInventoryComponent, canActivate: [authGuard],
        children: [
          { path: 'detalles', component: InventoryAmounts, canActivate: [authGuard] },
          { path: 'total', component: TotalTabComponent, canActivate: [authGuard] }
        ]
      },
      { path: 'gestor-archivos', component: GestorArchivosComponent, canActivate: [authGuard] }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
