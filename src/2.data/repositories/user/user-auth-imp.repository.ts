import { Injectable } from "@angular/core";
import { UserImplementationRepositoryMapper } from "./mapper/user-repository.mapper";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { UserAuthRepository } from "src/1.domain/repositories/user-auth.repository";
import { GenericCRUDService } from "src/app/services/generic-crud.service";
import { environment } from "src/environments/environment.development";
import { UserModel } from "src/1.domain/models/user.model";


@Injectable({
    providedIn: 'root',
})

export class UserAuthImplementationRepository extends UserAuthRepository {
    userMapper = new UserImplementationRepositoryMapper();
    private readonly base_url = `${environment.url_services}/Auth`
    constructor(private http: HttpClient, private genericCRUD:GenericCRUDService) {
        super();
    }

    login(params: {username: string, password: string}): Observable<UserModel> {
        return this.genericCRUD.postApiData(`${this.base_url}/login`,params);
    }

    register(params: {username: string, password: string}): Observable<UserModel> {
       return this.genericCRUD.postApiData(`${this.base_url}/register`,params);
    }
  

}
