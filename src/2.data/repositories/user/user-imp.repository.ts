import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { UserAuthRepository } from 'src/1.domain/repositories/user-auth.repository';
import { environment } from 'src/environments/environment.development';
import { UserModel } from 'src/1.domain/models/user.model';
import { UserAuthRepositoryMapper } from './mapper/user-auth-repository.mapper';
import { GenericCRUDService } from 'src/2.data/helpers/generic-crud.service';
import { UserRepository } from 'src/1.domain/repositories/user.repository';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository implements UserRepository {
  userMapper = new UserAuthRepositoryMapper();
  private readonly base_url = `${environment.url_services}/Auth`;
  constructor(private genericCRUD: GenericCRUDService) {}

  resetPassword(params:{password: string}): Observable<UserModel> {
    return this.genericCRUD
      .postApiData({
        url: `${this.base_url}/reset-password?nuevaClave=${params}`,
        body: null,
      })
      .pipe(map(this.userMapper.mapFrom));
  }
}
