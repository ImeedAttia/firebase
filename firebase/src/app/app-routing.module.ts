import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListContactComponent } from './compnenets/list-contact/list-contact.component';

const routes: Routes = [
  {path : "main" , component: MainComponent},
  {path : "list" , component: ListContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
