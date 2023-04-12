import { FormBuilder, Validators } from '@angular/forms';
import { Observable, catchError, map, of, startWith, take, tap, timer } from 'rxjs';
import { controlErrorMessage, patternValidators } from 'src/app/utils/validators.service';

import { AppState } from 'src/domain/models/app-state.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { DataState } from 'src/domain/models/data-state.enum';
import { IResponse } from 'src/domain/models/response.interface';
import { IUser } from 'src/domain/models/usuario.interface';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this._formBuilder.nonNullable.group({
    usuario: ['', [Validators.required, Validators.pattern(patternValidators.onlyLetters)]],
    clave: ['', [Validators.required, Validators.pattern(patternValidators.passwordSecure)]],
  });

  register$!: AppState<IResponse>

  readonly DataState = DataState;


  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private router: Router,
    private _localStorage: StorageService
  ) { }



  async onSubmit() {
    const user: IUser = this.registerForm.value;
    //Form invalid
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched()
      return
    }

    //Form valid
    this._authService.register$(user).pipe(
      map((response) => {
        return { state: DataState.LOADED, data: response };
      }),
      tap(() => {
        timer(5000).subscribe(() => {
          this.router.navigateByUrl('/login');
        })
      }

      ),
      startWith({ state: DataState.LOADING }),
      catchError((error) => {
        console.log('Error', error);
        return of({ state: DataState.ERROR, error: error.message });
      }),
    ).subscribe((res) => {
      this.register$ = res
    })
  }



  get usernameErrors(): string {
    const userControl = this.registerForm.controls.usuario;
    if (userControl.hasError("required")) {
      return controlErrorMessage.username.required;
    }
    if (userControl.hasError("pattern")) {
      return controlErrorMessage.username.pattern;
    }
    return '';
  }

  get passwordErrors(): string {
    const userControl = this.registerForm.controls.clave;
    if (userControl.hasError("required")) {
      return controlErrorMessage.password.required;
    }
    if (userControl.hasError("pattern")) {
      return controlErrorMessage.password.pattern;
    }
    return '';
  }
}
