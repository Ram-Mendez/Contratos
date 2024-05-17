import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./LoginPage/login.component";
import {CreateUserComponent} from "./CreateUser/create-user.component";

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'register', component: CreateUserComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
