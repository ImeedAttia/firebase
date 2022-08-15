import { Component, OnInit } from '@angular/core';
import { AuthClientService } from 'src/app/services/auth-client.service';
import { LoginData } from './../Models/login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( public authService: AuthClientService) { }
  login : LoginData = {
    email : "rezr",
    password : "ezrazr"
  }
  ngOnInit(): void {
  }

}
