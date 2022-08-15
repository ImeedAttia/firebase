import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { ClientService } from 'src/app/services/client.service';
import { Client } from './../Models/client';
import { AuthClientService } from './../../services/auth-client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client :Client[]=[];
  constructor( private readonly  cs:ClientService,private authService : AuthClientService) { }
 swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})
  ngOnInit(): void {
    this.cs.getData().subscribe(c=>{
      this.client = c as Client[];
    })

  }
  try(){
    console.log(this.authService.logout())
  }
  try2(){
    console.log( this.authService.getAuthFire())
    console.log( this.authService.UserData)
  }
  getTotal(){
   return this.client.reduce((total,client)=>{
      return total + client.balance;
    },0)
  }
  delete(id : any){
   this.swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      this.cs.deleteData(id)
      this.swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      this.swalWithBootstrapButtons.fire(
        'Cancelled',
        'Delete Canceled :)',
        'error',
      )
    }
  })

  }

}
