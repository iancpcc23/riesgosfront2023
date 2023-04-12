import { NgModule } from "@angular/core";
import { UserAuthRepository } from "src/domain/repositories/user-auth.repository";
import { UserLoginUseCase } from "src/domain/usecases/user-login.usecase";
import { UserRegisterUseCase } from "src/domain/usecases/user-register.usecase";
import { UserImplementationRepository } from "./repositories/user/UserImplementationRepository";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

// const userLoginUseCaseFactory = (userRepo: UserAuthRepository) => new UserLoginUseCase(userRepo);
// const userRegisterUseCaseFactory = (userRepo: UserAuthRepository) =>new UserRegisterUseCase(userRepo);

// export const userLoginUseCaseProvider = {
//   provide: UserLoginUseCase,
//   useFactory: userLoginUseCaseFactory,
//   deps: [UserAuthRepository],
// };

// export const userRegisterUseCaseProvider = {
//   provide: UserRegisterUseCase,
//   useFactory: userRegisterUseCaseFactory,
//   deps: [UserAuthRepository],
// };


// @NgModule({
//   providers: [
//     userLoginUseCaseProvider,
//     userRegisterUseCaseProvider,
//     { provide: UserAuthRepository, useClass: UserImplementationRepository },
//   ],
//   imports: [CommonModule, HttpClientModule],
// })
// export class DataModule {}
