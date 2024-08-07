import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainPageComponent} from './main-page.component';
import {RouterModule} from "@angular/router";
import {InputSwitchModule} from "primeng/inputswitch";
import {TableModule} from "primeng/table";
import {ContratoComponent} from './components/contratosAll/contrato/contrato.component';
import {ContratosComponent} from "./components/contratosAll/contratos/contratos.component";
import {CreateContratoComponent} from './components/contratosAll/createContrato/create-contrato.component';
import {ChipsModule} from "primeng/chips";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from "../headerAndFooter/footerView/footer/footer.component";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {TreeModule} from "primeng/tree";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {CalendarModule} from "primeng/calendar";
import {
  CrearAutoridadComponent
} from './components/entidadAutoridad/components/crear-autoridad/crear-autoridad.component';
import {
  EntidadesContratantesComponent
} from './components/entidadContratante/components/entidades-contratante/entidades-contratantes.component';
import {PaginatorModule} from "primeng/paginator";
import {
  CrearContratanteComponent
} from './components/entidadContratante/components/crear-contratante/crear-contratante.component';
import {
  EntidadesAutoridadComponent
} from './components/entidadAutoridad/components/entidades-autoridad/entidades-autoridad.component';
import {
  EntidadContratanteComponent
} from './components/entidadContratante/components/entidad-contratante/entidad-contratante.component';
import {
  EntidadAutoridadComponent
} from './components/entidadAutoridad/components/entidad-autoridad/entidad-autoridad.component';
import {FloatLabelModule} from "primeng/floatlabel";
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";
import { ContratoInventoryComponent } from './components/contratosAll/inventario/contrato-inventory.component';
import {MenubarModule} from "primeng/menubar";
import {TreeTableModule} from "primeng/treetable";
import {DialogModule} from "primeng/dialog";
import { InventoryAmounts } from './components/contratosAll/inventario/amounts/inventory-amounts.component';
import { TotalTabComponent } from './components/contratosAll/inventario/total/total-tab.component';
import { GestorArchivosComponent } from './components/contratosAll/gestor-archivos/gestor-archivos.component';
import {FileUploadModule} from "primeng/fileupload";


@NgModule({
  declarations: [
    MainPageComponent,
    ContratoComponent,
    ContratosComponent,
    CreateContratoComponent,
    FooterComponent,
    CrearAutoridadComponent,
    EntidadesContratantesComponent,
    CrearContratanteComponent,
    EntidadesAutoridadComponent,
    EntidadContratanteComponent,
    EntidadAutoridadComponent,
    ContratoInventoryComponent,
    InventoryAmounts,
    TotalTabComponent,
    GestorArchivosComponent,

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
        PaginatorModule,
        FloatLabelModule,
        DropdownModule,
        MultiSelectModule,
        MenubarModule,
        TreeTableModule,
        DialogModule,
        FileUploadModule


    ],
  providers: [MessageService],
  exports: [
    FooterComponent
  ],

})
export class MainModule {
}
