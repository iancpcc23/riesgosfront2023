import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {
  ACCESS_TOKEN_KEY,
  USER_LOGGED_KEY,
} from '../../base/config/constantes';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { UserLoginUseCase } from 'src/1.domain/usecases/user-login.usecase';
import { TokenModel } from 'src/1.domain/models/token.model';
import { IToken } from '../interfaces/token.interface';
import { JwtService } from '../utils/jwt-service.service';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private readonly base_url = `${environment.url_services}/Auth`;
  public isAuthenticated$ = new EventEmitter<boolean>();
  public userLoggedInfo!: IToken;
  public userAccessToken!: string | null;

  constructor(
    private _localStorage: StorageService,
    private _userLoginUseCase: UserLoginUseCase,
    private jwtService: JwtService
  ) {
    this.loadUserDataFromStorage();
  }

  login$ = (params: {
    username: string;
    password: string;
  }): Observable<TokenModel> =>
    this._userLoginUseCase.execute(params).pipe(
      tap((resp: TokenModel) => {
        this._localStorage.saveData(USER_LOGGED_KEY, resp.userId!);
        if (resp.accessToken) {
          console.log('Se guarda el token');
          this.userAccessToken =   resp.accessToken;        
          this._localStorage.saveData(ACCESS_TOKEN_KEY, resp.accessToken);
        }
      })
    );

  get isLoggedIn(): boolean {
    // return this.userAccessToken != null && !this.isTokenExpired();
    return this.userAccessToken != null
  }

  // register$ = (user: IUser): Observable<IResponse> => {
  //   return this._genericCRUDService.postApiData<IResponse>(`${this.base_url}/register`, user)
  // }

  // validateUserToken$ = (token: string = ""): Observable<IResponse> => {
  //   const headers = { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`), withCredentials: true };
  //   return this._genericCRUDService.postApiData(`${this.base_url}/validateToken`, null, headers);
  // }

  loadUserDataFromStorage(): void {
    this.userAccessToken = this._localStorage.getData(ACCESS_TOKEN_KEY);
    if (this.userAccessToken) {
      this.userLoggedInfo = this.jwtService.decodeJwt(this.userAccessToken);
      console.log(this.userLoggedInfo);
      this._localStorage.saveData(
        USER_LOGGED_KEY,
        JSON.stringify(this.userLoggedInfo)
      );
    }
  }

  isTokenExpired(): boolean {
    try {
      const currentTime = new Date().getTime();
      const expiresIn = this.userLoggedInfo.exp!;
      let expira = expiresIn < currentTime;
      return expiresIn < currentTime;
    } catch (error) {
      console.log('Error', error);
      throw error;
    }
  }

  logout() {
    this.isAuthenticated$.emit(false);
    this._localStorage.removeData(ACCESS_TOKEN_KEY);
  }
}
