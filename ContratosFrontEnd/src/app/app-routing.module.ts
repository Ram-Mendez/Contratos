import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/LoginPage/login.component";
import {CreateUserComponent} from "./login/CreateUser/create-user.component";
import {MainPageComponent} from "./main/main-page.component";
import {ContratoComponent} from "./main/components/contratosAll/contrato/contrato.component";
import {CreateContratoComponent} from "./main/components/contratosAll/createContrato/create-contrato.component";
import {GestionesComponent} from "./headerAndFooter/header/components/gestiones/gestiones.component";
import {ContactPageComponent} from "./headerAndFooter/header/components/contactUs/contact-page/contact-page.component";
import {
  EntidadesContratantesComponent
} from "./main/components/entidadContratante/components/entidades-contratante/entidades-contratantes.component";
import {ContratosComponent} from "./main/components/contratosAll/contratos/contratos.component";
import {AboutUsComponent} from "./headerAndFooter/header/components/about-us/about-us.component";
import {
  CrearContratanteComponent
} from "./main/components/entidadContratante/components/crear-contratante/crear-contratante.component";
import {
  EntidadesAutoridadComponent
} from "./main/components/entidadAutoridad/components/entidades-autoridad/entidades-autoridad.component";
import {
  CrearAutoridadComponent
} from "./main/components/entidadAutoridad/components/crear-autoridad/crear-autoridad.component";
import {
  EntidadContratanteComponent
} from "./main/components/entidadContratante/components/entidad-contratante/entidad-contratante.component";
import {
  EntidadAutoridadComponent
} from "./main/components/entidadAutoridad/components/entidad-autoridad/entidad-autoridad.component";

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
    path: 'home', component: MainPageComponent,
  },
  {
    path: 'contratos', component: ContratosComponent,
  },
  {
    path: 'gestiones', component: GestionesComponent,
    children: [
      {
        path: 'contracts', component: ContratosComponent,
      },
      {
        path: 'create-contract', component: CreateContratoComponent
      },
      {
        path: 'contrato/:id', component: ContratoComponent
      },
      {
        path: 'contractors', component: EntidadesContratantesComponent,
      },
      {
        path: 'create-contractor', component: CrearContratanteComponent
      },
      {
        path: 'contractor/:id', component: EntidadContratanteComponent
      },
      {
        path: 'authorities', component: EntidadesAutoridadComponent
      },
      {
        path: 'create-authority', component: CrearAutoridadComponent
      },
      {
        path: 'authority/:id', component: EntidadAutoridadComponent
      },
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
