import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap, map, throwError } from 'rxjs';

import { ACCESS_TOKEN_KEY } from '../config/constantes';
import { GenericCRUDService } from './generic-crud.service';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/domain/models/usuario.interface';
import { IResponse } from 'src/domain/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly base_url = `${environment.url_services}/Auth`
  public isAuthenticated$ = new EventEmitter<boolean>();
  isAuthenticated: boolean = false;
  constructor(private _genericCRUDService: GenericCRUDService
    , private _localStorage: StorageService
  ) { }

  login$ = (user: IUser): Observable<IResponse> => {
    return this._genericCRUDService.postApiData<IResponse>(`${this.base_url}/login`, user)
  }

  register$ = (user: IUser): Observable<IResponse> => {
    return this._genericCRUDService.postApiData<IResponse>(`${this.base_url}/register`, user)
  }

  validateUserToken$ = (token: string = ""): Observable<IResponse> => {
    const headers = { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`), withCredentials: true };
    return this._genericCRUDService.postApiData(`${this.base_url}/validateToken`, null, headers);
  }

  logout() {
    this.isAuthenticated$.emit(false);
    this._localStorage.removeData(ACCESS_TOKEN_KEY);
  }


}
