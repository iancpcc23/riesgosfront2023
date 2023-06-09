import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { UserRepository } from '../../repositories/user.repository';
import { Injectable } from '@angular/core';
@Injectable()
export class UserCreatePasswordUseCase

  implements UseCase<{ userId:string ,password: string }, boolean>
{
  constructor(private readonly userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute(params: { userId: string; password: string }): Observable<boolean> {
    return this.userRepository.resetPassword(params);
  }
}
