import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  CommonModule],
  exports: [RouterModule, CommonModule]
})
export class AuthRoutingModule {}
