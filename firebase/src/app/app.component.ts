import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { delay, filter, map, Observable, of } from 'rxjs';
import { InterceptorService } from './services/interceptor.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {Event} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firebase';


  constructor(public router: Router,private  spinner : NgxSpinnerService) {

  }

  ngOnInit() {

  }}




