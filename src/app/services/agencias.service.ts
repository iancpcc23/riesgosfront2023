import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpHeaders } from '@angular/common/http';
import { of } from "rxjs";
import { listaAgencias } from 'src/base/config/constantes';
@Injectable({
  providedIn: 'root'
})
export class AgenciasService {
  private readonly base_url = `${environment.url_services}/Riesgos/copyInformation`;
  private readonly headers = {
    headers: new HttpHeaders().set('Content-type', 'application/json'),
    withCredentials: true,
  };

  constructor() { }


  getAllAgencias$ = of<any[]>(listaAgencias);

}
