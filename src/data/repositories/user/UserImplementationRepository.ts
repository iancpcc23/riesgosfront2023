import { Injectable } from "@angular/core";
import { UserImplementationRepositoryMapper } from "./mapper/user-repository.mapper";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { UserModel } from "src/domain/models/user.model";
import { UserEntity } from "src/data/entities/user.entity";
import { AppStateEntity } from "src/data/entities/app-state.entity";
import { UserAuthRepository } from "src/domain/repositories/user-auth.repository";
import { ResponseEntity } from "src/domain/models/response.entity";
import { GenericCRUDService } from "src/data/mapper/generic-crud.service";
import { environment } from "src/environments/environment.development";


@Injectable({
    providedIn: 'root',
})

export class UserImplementationRepository extends UserAuthRepository {
    userMapper = new UserImplementationRepositoryMapper();
    private readonly base_url = `${environment.url_services}/Auth`
    constructor(private http: HttpClient, private genericCRUD:GenericCRUDService) {
        super();
    }

    login(params: {username: string, password: string}): Observable<ResponseEntity<object>> {
        return this.genericCRUD.postApiData(`${this.base_url}/login`,params);
    }

    register(params: {username: string, password: string}): Observable<ResponseEntity<void>> {
       return this.genericCRUD.postApiData(`${this.base_url}/register`,params);
    }
  

}
