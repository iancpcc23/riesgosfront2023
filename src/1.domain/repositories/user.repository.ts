import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

export abstract class UserRepository {
  abstract resetPassword(params:{password: string}): Observable<UserModel>;
}
