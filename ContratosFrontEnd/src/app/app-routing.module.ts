import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/LoginPage/login.component";
import {CreateUserComponent} from "./login/CreateUser/create-user.component";
import {MainPageComponent} from "./main/main-page.component";
import {ContratoComponent} from "./main/components/contrato/contrato.component";
import {CreateContratoComponent} from "./main/components/createContrato/create-contrato.component";
import {DetallesContratoComponent} from "./main/components/contrato/detalles-contrato/detalles-contrato.component";

const routes: Routes = [

  {
    path: '', component: LoginComponent
  },
  {
    path: 'register', component: CreateUserComponent
  },
  {
    path: 'main', component: MainPageComponent,
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
