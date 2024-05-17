import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratosRoutingModule } from './contratos-routing.module';
import { HeaderComponent } from './components/header/header.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {TreeModule} from "primeng/tree";
import { ContratosComponent } from './components/contratos/contratos.component';
import {InputSwitchModule} from "primeng/inputswitch";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent,
    ContratosComponent,
  ],
  exports: [
    HeaderComponent,
    ContratosComponent,
  ],
  imports: [
    CommonModule,
    ContratosRoutingModule,
    BreadcrumbModule,
    TreeModule,
    InputSwitchModule,
    TableModule,
    FormsModule
  ]
})
export class ContratosModule { }
