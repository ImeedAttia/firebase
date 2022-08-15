import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthClientService } from './../../services/auth-client.service';

import { Router } from '@angular/router';
import { LoginData } from './../Models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any;

  constructor(public readonly authService: AuthClientService,
    private readonly router: Router) {}

  ngOnInit(): void {
   // if(this.authService.getAuth()){
   //   this.router.navigate(['/client'])
   // }
  }

LoginData={
  email : "",
  password : ""
}
try2(){
  console.log( this.authService.getAuthFire()?.email)
}
  onSubmit() {

    this.authService
    .login(this.LoginData)
    .catch((e) => console.log(e.message));
}
googlesignin(){
  this.authService.GoogleAuth()

}


  }




