import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { GenericCRUDService } from './generic-crud.service';
import { IResponse } from '../../domain/models/response.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { ACCESS_TOKEN_KEY } from '../config/constantes';

@Injectable({
  providedIn: 'root',
})
export class RiesgosService {
  private readonly base_url = `${environment.url_services}/Riesgos/copyInformation`;
  private readonly headers = {
    headers: new HttpHeaders().set('Content-type', 'application/json'),
    withCredentials: true,
  };



  constructor(private _genericCRUDService: GenericCRUDService, private _localStorage: StorageService) { }

  runSP$ = (nameSP: (String | number) = "", date: string): Observable<IResponse> => {

    const token = this._localStorage.getData(ACCESS_TOKEN_KEY);
    const headers = { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`), withCredentials: true };
    return this._genericCRUDService.postApiData<IResponse>(
      `${this.base_url}?date=${date}&nameSp=${nameSP}`, null, headers)
  };


}
