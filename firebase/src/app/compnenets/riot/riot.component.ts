import { Component, OnInit } from '@angular/core';
import { RiotService } from './../../services/riot.service';

@Component({
  selector: 'app-riot',
  templateUrl: './riot.component.html',
  styleUrls: ['./riot.component.css']
})
export class RiotComponent implements OnInit {

  constructor(private riotservice : RiotService) { }
  username : string = 'tofe7a';
  UserData !: any;
  ngOnInit(): void {
  }
  showUSer(){
    this.riotservice.get(this.username).subscribe((res)=>{
      console.log(res);
      this.UserData = res;
    })
  }
}
