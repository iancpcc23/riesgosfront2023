import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  Observable,
  catchError,
  map,
  of,
  startWith,
  take,
  tap,
  timer,
} from 'rxjs';
import {
  controlErrorMessage,
  patternValidators,
} from 'src/app/utils/validators.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import {
  AppStateEntity,
  CustomError,
} from 'src/2.data/entities/app-state.entity';
import { DataState } from 'src/2.data/entities/app-state.entity';
import { ResponseEntity } from 'src/2.data/entities/response.entity';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  // providers: [
  //   {
  //     provide: UserResetPasswordUseCase,
  //     useFactory: (userRepository: UserRepository) =>
  //       new UserResetPasswordUseCase(userRepository),
  //     deps: [UserRepository],
  //   },
  // ],
})
export class ResetPasswordComponent implements OnInit {
  resetPassForm = this._formBuilder.nonNullable.group(
    {
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(patternValidators.passwordSecure),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(patternValidators.passwordSecure),
        ],
      ],
    },
    {
      validators: this.MatchPassword,
    }
  );

  MESSAGE_SUCCESS = 'Contraseña cambiada exitosamente';

  resetPassword$!: AppStateEntity<ResponseEntity<any>>;

  readonly DataState = DataState;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private _userService: UserService
  ) {}
  ngOnInit(): void {}

  async onSubmit() {
    const { password, confirmPassword } = this.resetPassForm.value;

    //Form invalid
    if (this.resetPassForm.invalid) {
      // this.resetPassForm.controls.confirmPassword.setErrors({ required: true });
      this.resetPassForm.markAsDirty();

      return;
    }

    this._userService.resetPassword$(confirmPassword!)
      .pipe(
        map((response) => {
          return {
            state: DataState.LOADED,
            data: { message: this.MESSAGE_SUCCESS },
          };
        }),
        tap(() => {
          timer(5000).subscribe(() => {
            this.router.navigateByUrl('/login');
          });
        }),
        startWith({ state: DataState.LOADING }),
        catchError((error) => {
          console.log('Error', error);
          
          return of({ state: DataState.ERROR, error });
        })
      )
      .subscribe((res: any) => {
        this.resetPassword$ = res;
      });
  }

  MatchPassword(formGroup: AbstractControl): ValidationErrors | null {
    const { password, confirmPassword } = formGroup.value;
    // return password === confirmPassword ? null : formGroup.get("confirmPassword")?.setErrors({ passwordNotMatch: true });
    if (password === confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors(null);
      return null;
    }
    formGroup.get('confirmPassword')?.setErrors({ passwordMatch: true });
    return {};
  }

  get passwordErrors(): string | null {
    const userControl = this.resetPassForm.controls['password'];
    if (userControl.hasError('required')) {
      return controlErrorMessage.password.required;
    }
    if (userControl.hasError('pattern')) {
      return controlErrorMessage.password.pattern;
    }
    if (userControl.hasError('passwordMatch')) {
      return controlErrorMessage.password.passwordMatch;
    }
    return null;
  }
  get passwordErrorsConfirm(): string | null {
    const userControl = this.resetPassForm.controls['confirmPassword'];
    if (userControl.hasError('required')) {
      return controlErrorMessage.password.required;
    }
    if (userControl.hasError('pattern')) {
      return controlErrorMessage.password.pattern;
    }
    if (userControl.hasError('passwordMatch')) {
      return controlErrorMessage.password.passwordMatch;
    }
    return null;
  }
}
