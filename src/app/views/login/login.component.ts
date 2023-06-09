import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, map, of, startWith, take, tap } from 'rxjs';
import {
  controlErrorMessage,
  patternValidators,
} from 'src/app/utils/validators.service';

import { ACCESS_TOKEN_KEY } from 'src/base/config/constantes';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserModel } from 'src/1.domain/models/user.model';
import {
  AppStateEntity,
  DataState,
} from 'src/2.data/entities/app-state.entity';
import { UserLoginUseCase } from 'src/1.domain/usecases/user-login.usecase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [
  //   {
  //     provide: UserLoginUseCase,
  //     useFactory: (userRepository: UserAuthRepository) =>
  //       new UserLoginUseCase(userRepository),
  //     deps: [UserAuthRepository],
  //   },
  // ],
})
export class LoginComponent implements OnInit {
  loginForm = this._formBuilder.nonNullable.group({
    username: [
      'CHASICHRISTIAN',
      [Validators.required, Validators.pattern(patternValidators.onlyLetters)],
    ],
    password: [
      'rmYF9q9rXT',
      [
        Validators.required,
        Validators.pattern(patternValidators.passwordSecure),
      ],
    ],
  });

  login!: AppStateEntity<UserModel>;

  readonly DataState = DataState;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private _localStorage: StorageService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {}

  async onSubmit() {
    //Form invalid
    const { username, password } = this.loginForm.value;
    if (this.loginForm.invalid || !username || !password) {
      this.loginForm.markAsDirty();
      // console.log('error', this.loginForm.controls.clave.errors);
      return;
    }
    //Form valid
    this.authService.login$({ username, password })
      .pipe(
        tap((response) => {
          if (response.passwordExpired ) {
            return this.router.navigateByUrl('/reset-password');
          } 
          return  this.router.navigateByUrl('/');
          
        }),
        map((response) => {
          return { state: DataState.LOADED, data: response };
        }),
        startWith({ state: DataState.LOADING }),
        catchError((error) => {
          console.log('Error', error);
          return of({ state: DataState.ERROR, error });
        })
      )
      .subscribe((res:any) => (this.login = res));
  }

  get usernameErrors(): string {
    const userControl = this.loginForm.controls.username;
    if (userControl.hasError('required')) {
      return controlErrorMessage.username.required;
    }
    if (userControl.hasError('pattern')) {
      return controlErrorMessage.username.pattern;
    }
    return '';
  }

  get passwordErrors(): string {
    const userControl = this.loginForm.controls.password;
    if (userControl.hasError('required')) {
      return controlErrorMessage.password.required;
    }
    if (userControl.hasError('pattern')) {
      return controlErrorMessage.password.pattern;
    }
    return '';
  }
}
