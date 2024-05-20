import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page.component';
import {RouterModule} from "@angular/router";
import {InputSwitchModule} from "primeng/inputswitch";
import {TableModule} from "primeng/table";
import { ContratoComponent } from './components/contrato/contrato.component';
import {ContratosComponent} from "./components/contratos/contratos.component";
import { CreateContratoComponent } from './components/createContrato/create-contrato.component';
import {ChipsModule} from "primeng/chips";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from "../headerAndFooter/footerView/footer/footer.component";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import { DetallesContratoComponent } from './components/contrato/detalles-contrato/detalles-contrato.component';
import {TreeModule} from "primeng/tree";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {CalendarModule} from "primeng/calendar";
import { EntidadAutoridadComponent } from './components/entidadAutoridad/components/entidad-autoridad/entidad-autoridad.component';
import { EntidadContratanteComponent } from './components/entidadContratante/components/entidad-contratante/entidad-contratante.component';



@NgModule({
    declarations: [
        MainPageComponent,
        ContratoComponent,
        ContratosComponent,
        CreateContratoComponent,
        FooterComponent,
        DetallesContratoComponent,
        EntidadAutoridadComponent,
        EntidadContratanteComponent,

    ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    InputSwitchModule,
    TableModule,
    ChipsModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    TreeModule,
    FormsModule,
    ConfirmDialogModule,
    CalendarModule,
  ],
    providers: [MessageService],
    exports: [
        FooterComponent
    ],
    // Añade MessageService a los proveedores

})
export class MainModule { }
