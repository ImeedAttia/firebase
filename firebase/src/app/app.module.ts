import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NavbarComponent } from './compnenets/navbar/navbar.component';
import { ListContactComponent } from './compnenets/list-contact/list-contact.component';
import { AddContactComponent } from './compnenets/add-contact/add-contact.component';
import { MainComponent } from './main/main.component';
import { ContactService } from './services/contact.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListContactComponent,
    AddContactComponent,
    MainComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
