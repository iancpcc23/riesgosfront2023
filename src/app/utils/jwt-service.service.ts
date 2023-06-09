import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { IToken } from '../interfaces/token.interface';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}

  decodeJwt(token: string): IToken {
    let tokenDecoded: any = jwt_decode(token);
    const username =
      tokenDecoded[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ];
    const roles =
      tokenDecoded[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ];
    const expirationTime = tokenDecoded['exp'];
    return { name: username, role: roles, exp: expirationTime };
  }
}
