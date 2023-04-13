import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";

export abstract class UserAuthRepository {

    abstract login(params: {username: string, password: string}): Observable<UserModel>;
    abstract register(params: {username: string, password: string}): Observable<UserModel>;
}