import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserModel } from '../models/user.model';
import { UserAuthRepository } from '../repositories/user-auth.repository';
import { UserRepository } from '../repositories/user.repository';

export class UserResetPasswordUseCase
  implements UseCase<{ password: string }, UserModel>
{
  constructor(private readonly userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute(params: { password: string }): Observable<UserModel> {
    return this.userRepository.resetPassword(params);
  }
}
