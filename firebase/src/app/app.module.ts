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
import { LoginComponent } from './compnenets/login/login.component';
import { RegisterComponent } from './compnenets/register/register.component';
import { ClientComponent } from './compnenets/client/client.component';
import { AddClientComponent } from './compnenets/add-client/add-client.component';
import { ClientService } from 'src/app/services/client.service';
import { AuthClientService } from './services/auth-client.service';
import { AuthGuardsGuard } from './guards/auth-guards.guard';
import { SecureInnerPagesGuard } from './guards/secure-inner-pages.guard';
import { ProfileComponent } from './compnenets/profile/profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LaoderInterceptor } from './interceptor/laoder.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InterceptorService } from './services/interceptor.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RiotComponent } from './compnenets/riot/riot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListContactComponent,
    AddContactComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    ClientComponent,
    AddClientComponent,
    ProfileComponent,
    RiotComponent
  ],
  imports: [
BrowserModule,
  FormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: LaoderInterceptor, multi: true },ContactService,ClientService,AuthClientService,AuthGuardsGuard,SecureInnerPagesGuard,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
