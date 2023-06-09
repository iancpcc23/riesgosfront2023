import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ApplicationRef, Injectable } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { ACCESS_TOKEN_KEY } from '../../base/config/constantes';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard implements CanActivateChild {
  constructor(
    private _authService: AuthService,
    private _route: Router,
    private _localStorage: StorageService
  ) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('Token is', this._authService.isLoggedIn);
    
    //If token is null redirecto to login and emmit false
    if (!this._authService.isLoggedIn) {
      this._authService.isAuthenticated$.emit(false);
      this._route.navigateByUrl('/login');
      return false;
    }
    return true;
    //If exits token call validateToken service to validate token in server
    //     return this._authService.validateUserToken$(exisToken)
    //       .pipe(
    //         map(val => {
    //           console.log('Token Success', val);
    //           this._authService.isAuthenticated$.emit(true);
    //           return true;
    //         }),
    //         catchError(error => {
    //           console.log('Token Invalid');
    //           this._authService.isAuthenticated$.emit(false);
    //           this._route.navigateByUrl("/login");
    //           return of(false)
    //         })
    //       )
  }
}
