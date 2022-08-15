import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthClientService } from './../services/auth-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsGuard implements CanActivate {

  constructor(public authService: AuthClientService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn !== true) {
      this.router.navigate(['/login'])
    }
    return true;
  }


  }

