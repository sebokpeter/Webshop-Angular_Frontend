import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../shared/services/authentication-service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, 
              private authService: AuthenticationService) {}

  canActivate(){
    debugger;
      if(this.authService.getToken()) {
        return true;
      }

      this.router.navigateByUrl('/login');
      return false;
    }
}
