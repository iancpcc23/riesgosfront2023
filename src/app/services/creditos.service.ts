import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { StorageService } from './storage.service';
import { ACCESS_TOKEN_KEY } from 'src/base/config/constantes';
import { CuotasVencidas } from '../interfaces/cuotasVencidas.interface';

@Injectable({
  providedIn: 'root',
})
export class CreditosService {
  private readonly base_url = `${environment.url_services}/Credits/cuotasVencidas`;
  private readonly headers = {
    headers: new HttpHeaders().set('Content-type', 'application/json'),
    withCredentials: true,
  };

  constructor(
    private _localStorage: StorageService,
    private httpclient: HttpClient
  ) {}

  // getCuotasVencidasByAsesor$ = (fechaCorte: string,agenciaId: string,asesorId: string) => {
  //   const token = this._localStorage.getData(ACCESS_TOKEN_KEY);
  //   const headers = {
  //     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
  //     withCredentials: true,
  //   };
  //   return this._genericCRUDService.postApiData(
  //     // `${this.base_url}?fechaCorte=${fechaCorte}&agenciaId=${agenciaId}&asesorId=${asesorId}`,
  //     `http://localhost:3000/api`,
  //     null,
  //     this.headers
  //   );
  // };
  getCuotasVencidasByAsesor$ = (fechaCorte: string,agenciaId: string,asesorId: string) =>{
    return this.httpclient.get<CuotasVencidas[]>("http://localhost:3000/api")
  }
}
