import { Component, OnInit } from '@angular/core';
import { AuthClientService } from 'src/app/services/auth-client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
Name : any
user: any
  constructor(public authService: AuthClientService) {
    this.user = this.authService.getAuthLocal()
   }

  ngOnInit(): void {
    this.isUSerAuthentificated()

  }
  isUSerAuthentificated(){
    if(this.user){
      this.Name = this.user.email
      return true
    }
    else {
      return false
    }

  }



}
