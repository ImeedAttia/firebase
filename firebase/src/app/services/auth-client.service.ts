import { Injectable,NgZone  } from '@angular/core';
import {sendEmailVerification } from "firebase/auth";

import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,

} from '@angular/fire/auth';
import { LoginData } from '../compnenets/Models/login';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FirebaseErrors } from './../compnenets/Models/firebase.errors';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {
  UserData : any
  constructor(private auth: Auth,private router : Router, public ngZone: NgZone) {
    onAuthStateChanged(this.auth,(user)=>{
      if(user){
        this.UserData = user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }
  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password)
    .then((result: any) => {
      this.UserData = result
      this.ngZone.run(() => {
        this.router.navigate(['/client']);
      });
    })
    .catch((error) => {
       alert(error);
    });;
  }
  getAuthFire(){
    return this.auth.currentUser;
  }
  getAuthLocal(){
    const token = localStorage.getItem('user')
    const user = JSON.parse(token as string);
    return user;
  }


  get isLoggedIn(): boolean {
    const token = localStorage.getItem('user')
    const user = JSON.parse(token as string);
    console.log(user)
    return user !== null ? true : false;
  }


  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password)
    .then((result: any) => {
      this.UserData = result
      this.ngZone.run(() => {
        this.sendEmailVerification()
        this.router.navigate(['/client']);
      });
    })
    .catch((error) => {
       alert(error);
    });;


  }


  logout() {
     signOut(this.auth).then(()=>this.router.navigate(['/login']))

  }



  GoogleAuth() {
    return this.loginWithGoogle(new GoogleAuthProvider());
  }


  loginWithGoogle(provider :any) {
    return signInWithPopup(this.auth,provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //const credential = GoogleAuthProvider.credentialFromResult(result);
      //token
      //const token = credential?.accessToken;
      // The signed-in user info.
      this.UserData =  result.user;
      this.router.navigate(['/client'])
      // ...
    }).catch((error) => {
      // Handle Errors here.
      //const errorCode = error.code;
     const errorMessage = error.message;
     alert(error);
      // The email of the user's account used.
     // const email = error.customData.email;
      // The AuthCredential type that was used.
      //const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
 async  sendPasswordResetEmails(email : string){

    return sendPasswordResetEmail(this.auth,email);


  }



  sendEmailVerification(){
    return sendEmailVerification(this.auth.currentUser as User);

  }



}
