import { Injectable } from '@angular/core';
import { UserCreatePasswordUseCase } from 'src/1.domain/usecases/Users/user-create-password.usecase';
import { environment } from 'src/environments/environment.development';
import { StorageService } from './storage.service';
import { USER_LOGGED_KEY } from 'src/base/config/constantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly base_url = `${environment.url_services}/UserAccess`;
  constructor(
    private _userCreatePwd: UserCreatePasswordUseCase,
    private _localStorage: StorageService
  ) {}

  resetPassword$ = (password: string) : Observable<boolean> => {
    let userId = this._localStorage.getData(USER_LOGGED_KEY) ?? "undefined" ;
    return this._userCreatePwd.execute({ userId, password });
  };
}
