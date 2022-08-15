import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FirebaseErrors } from '../Models/firebase.errors';
import { AuthClientService } from './../../services/auth-client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public authService: AuthClientService) {
    this.authService.getAuthFire()
  }

  ngOnInit(): void {

  }
  auth(){
    return this.authService.getAuthFire()
  }

  sendPasswordResetEmails(){
    this.authService.sendEmailVerification().then((res) => {
      Swal.fire(
        'Email Sent!',
        'Please verify your spam inbox!',
        'success'
      )
    }).catch((error) => {
      alert(FirebaseErrors.Parse(error.code))
    }

    )
  }

}


