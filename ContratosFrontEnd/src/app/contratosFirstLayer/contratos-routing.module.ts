import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContratosOverview} from "./contratos-overview";

const routes: Routes = [
  {
    path: '', component: ContratosOverview

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratosRoutingModule { }
