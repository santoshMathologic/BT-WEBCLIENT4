import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { ForgetpasswordComponent } from './_components/forgetpassword/forgetpassword.component';
import { PageNotFoundComponent } from './_components/page-not-found.component';



const mainRouteConfig: Routes = [
  { path: '', loadChildren: '../app/_components/left-sidebar/left-sidebar.module#LeftSidebarModule'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget', component: ForgetpasswordComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(mainRouteConfig)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
