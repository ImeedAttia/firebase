import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, delay, finalize, from, map, Observable, pipe, switchMap, tap } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { InterceptorService } from '../services/interceptor.service';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

@Injectable()
export class LaoderInterceptor implements HttpInterceptor {


  constructor(
    private spinner: NgxSpinnerService,private auth : Auth
  ) {
    console.log(LaoderInterceptor)
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();
    return next.handle(request);
  }
}


