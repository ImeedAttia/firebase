import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../Models/contact';
import { ContactService } from './../../services/contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {


  statusContact : boolean=false;
  contacts :Contact[]=[];
  myContact!:Contact;
  contact:Contact = {
    name:'',
    telephone : 0
  };
  constructor( private readonly cs : ContactService) { }

  ngOnInit(): void {
    this.cs.getdata().subscribe(c=>{
      this.contacts = c as Contact[];
      console.log(this.contacts);
    })

   }

   delete(id:any){
    if(confirm('are you sure to delete this contact ??!')){
       this.cs.delete(id);
       this.statusContact = false
    }

   }
   updatedata(item:any){
    this.statusContact = false
    this.cs.UpdateData(item);
   }

   editContact(contact:Contact){
    this.statusContact = true;
    this.myContact = contact;
   }
}

