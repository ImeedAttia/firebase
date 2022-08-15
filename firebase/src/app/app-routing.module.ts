import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListContactComponent } from './compnenets/list-contact/list-contact.component';
import { LoginComponent } from './compnenets/login/login.component';
import { RegisterComponent } from './compnenets/register/register.component';
import { AddClientComponent } from './compnenets/add-client/add-client.component';
import { AuthGuardsGuard } from './guards/auth-guards.guard';


import { ClientComponent } from './compnenets/client/client.component';
import { SecureInnerPagesGuard } from './guards/secure-inner-pages.guard';
import { ProfileComponent } from './compnenets/profile/profile.component';

const routes: Routes = [
  {path : "main" , component: MainComponent},
  {path : "list" , component: ListContactComponent},
  {path : "login" , component: LoginComponent , canActivate: [SecureInnerPagesGuard]},
  {path : "register" , component: RegisterComponent },
  {path : "client" , component: ClientComponent, canActivate: [AuthGuardsGuard]},
  {path : "client/add" , component: AddClientComponent},
  {path : "profile" , component: ProfileComponent, canActivate: [AuthGuardsGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
