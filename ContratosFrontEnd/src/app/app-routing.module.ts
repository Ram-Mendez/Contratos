import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/LoginPage/login.component";
import {CreateUserComponent} from "./login/CreateUser/create-user.component";
import {MainPageComponent} from "./main/main-page.component";
import {ContratoComponent} from "./main/components/contrato/contrato.component";
import {CreateContratoComponent} from "./main/components/createContrato/create-contrato.component";
import {DetallesContratoComponent} from "./main/components/contrato/detalles-contrato/detalles-contrato.component";
import {GestionesComponent} from "./headerAndFooter/header/components/gestiones/gestiones.component";
import {ContactPageComponent} from "./headerAndFooter/header/components/contactUs/contact-page/contact-page.component";
import {
  EntidadContratanteComponent
} from "./main/components/entidadContratante/components/entidad-contratante/entidad-contratante.component";
import {ContratosComponent} from "./main/components/contratos/contratos.component";
import {AboutUsComponent} from "./headerAndFooter/header/components/about-us/about-us.component";

const routes: Routes = [

  {
    path: '', component: LoginComponent
  },
  {
    path: 'register', component: CreateUserComponent
  },
  {
    path: 'contact-page', component: ContactPageComponent
  },
  {
    path: 'about-page', component: AboutUsComponent
  },
  {
    path: 'main', component: MainPageComponent,
  },
  {
    path: 'contratos', component: ContratosComponent,
  },
  {
    path: 'gestiones', component: GestionesComponent,
    children: [{
      path: 'crear-contrato', component: CreateContratoComponent
    },
      {
        path: 'contratos', component: ContratosComponent,

      },
      {
        path: 'contractors', component: EntidadContratanteComponent,
        children: [
          {path: 'createContractor', component: EntidadContratanteComponent}
        ]
      }
    ]
  },
  {
    path: 'contrato/:id', component: ContratoComponent,
    children: [
      {
        path: 'editar-contrato', component: DetallesContratoComponent
      }
    ]
  },
  {
    path: 'create-contrato', component: CreateContratoComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
