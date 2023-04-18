import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { UserAuthRepository } from 'src/1.domain/repositories/user-auth.repository';
import { environment } from 'src/environments/environment.development';
import { UserModel } from 'src/1.domain/models/user.model';
import { UserAuthRepositoryMapper } from './mapper/user-auth-repository.mapper';
import { GenericCRUDService } from 'src/2.data/helpers/generic-crud.service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthImplementationRepository implements UserAuthRepository {
  userMapper = new UserAuthRepositoryMapper();
  private readonly base_url = `${environment.url_services}/Auth`;
  constructor(private genericCRUD: GenericCRUDService) {}


  login(params: { username: string; password: string }): Observable<UserModel> {
    return this.genericCRUD
      .postApiData({ url: `${this.base_url}/login`, body: {usuario: params.username, clave: params.password} })
      .pipe(map(this.userMapper.mapFrom));
  }

  register(params: {
    username: string;
    password: string;
  }): Observable<UserModel > {
    return this.genericCRUD.postApiData({url:`${this.base_url}/register`, body: {usuario: params.username, clave: params.password} })
  }
}
