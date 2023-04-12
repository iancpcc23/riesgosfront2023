import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";
import { ResponseEntity } from "../models/response.entity";

export abstract class UserAuthRepository {

    abstract login(params: {username: string, password: string}): Observable<ResponseEntity<object>>;
    abstract register(params: {username: string, password: string}): Observable<ResponseEntity<void>>;
}