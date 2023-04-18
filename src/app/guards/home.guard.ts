// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { ApplicationRef, Injectable } from '@angular/core';

// import { AuthService } from '../services/auth.service';
// import { catchError, map, Observable, of, tap } from 'rxjs';
// import { StorageService } from '../services/storage.service';
// import { ACCESS_TOKEN_KEY } from '../../base/config/constantes';

// @Injectable({
//   providedIn: 'root'
// })
// export class HomeGuard implements CanActivate {
//   constructor(private _authService: AuthService, private _route: Router, private _localStorage: StorageService) {

//   }
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
//     let exisToken = this._localStorage.getData(ACCESS_TOKEN_KEY);
//     //If token is null redirecto to login and emmit false 
//     if (!exisToken) {
//       this._authService.isAuthenticated$.emit(false);
//       this._route.navigateByUrl("/login");
//       return false;
//     }
//     //If exits token call validateToken service to validate token in server
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

//   }

// }
