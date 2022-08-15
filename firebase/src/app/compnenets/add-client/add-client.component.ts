import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from './../Models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client : Client={
    firstName : "",
    lastName:"",
    email:"",
    phone:null,
    balance:0
  }
  constructor(private readonly cs:ClientService,private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
      this.cs.createData(this.client);
      return this.route.navigate(['/client']);
  }


}
