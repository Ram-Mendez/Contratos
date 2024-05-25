import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/LoginPage/login.component";
import {CreateUserComponent} from "./login/CreateUser/create-user.component";
import {ContratoComponent} from "./main/components/contratosAll/contrato/contrato.component";
import {CreateContratoComponent} from "./main/components/contratosAll/createContrato/create-contrato.component";
import {GestionesComponent} from "./main/components/contratosAll/gestiones/gestiones.component";
import {ContactPageComponent} from "./headerAndFooter/header/components/contactUs/contact-page/contact-page.component";
import {ContratosComponent} from "./main/components/contratosAll/contratos/contratos.component";
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
    path: 'home', component: ContratosComponent,
  },
  {
    path: 'contratos', component: ContratosComponent,
  },
  {
    path: 'create-contract', component: CreateContratoComponent
  },
  {
    path: 'gestiones/:id', component: GestionesComponent,
    children: [

      {
        path: 'editar-contrato', component: ContratoComponent
      },
    ]
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
