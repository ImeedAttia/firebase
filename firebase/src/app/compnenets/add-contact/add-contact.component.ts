import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../Models/contact';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact:Contact = {
    name:'',
    telephone : 0
  }
  statusContact : boolean = false
  constructor(private cs:ContactService) { }

  ngOnInit(): void {
  }
newContact(){
  this.cs.create(this.contact);
  this.contact = {
    name:'',
    telephone : 0
  }
  this.statusContact = false
}

}
