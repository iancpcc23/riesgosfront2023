import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  Observable,
  catchError,
  map,
  of,
  startWith,
  take,
  tap,
} from 'rxjs';
import { controlErrorMessage, patternValidators } from 'src/app/utils/validators.service';

import { ACCESS_TOKEN_KEY } from 'src/app/config/constantes';
import { AppState } from 'src/domain/models/app-state.interface';
import { AuthService } from 'src/app/services/auth.service';
import { DataState } from 'src/domain/models/data-state.enum';
import { IResponse } from 'src/domain/models/response.interface';
import { IUser } from 'src/domain/models/usuario.interface';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this._formBuilder.nonNullable.group({
    usuario: ['', [Validators.required, Validators.pattern(patternValidators.onlyLetters)]],
    clave: ['', [Validators.required, Validators.pattern(patternValidators.passwordSecure)]],
  });

  login!: AppState<IResponse>

  readonly DataState = DataState;


  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private router: Router,
    private _localStorage: StorageService
  ) { }
  ngOnInit(): void {
    console.log('Form', this.loginForm);
    
  }

  async onSubmit() {
    const user: IUser = this.loginForm.value;
    //Form invalid
    if (this.loginForm.invalid) {
      // console.log('error', this.loginForm.controls.clave.errors);
      this.loginForm.markAsDirty()
      return
    }
    //Form valid
    let logins =  this._authService.login$(user).pipe(
      tap((response: any) => {
        console.log('Respuesta');
        
        this.router.navigateByUrl('/home');
        const { accessToken } = response?.data;
        this._localStorage.saveData(ACCESS_TOKEN_KEY, accessToken);
      }),
      map((response) => {
        return { state: DataState.LOADED, data: response };
      }),
      startWith({ state: DataState.LOADING }),
      catchError((error) => {
        console.log('Error', error);
        return of({ state: DataState.ERROR, error: error.message });
      }),
    ).subscribe(res => this.login = res)
      
  }



  get usernameErrors(): string {
    const userControl = this.loginForm.controls.usuario;
    if (userControl.hasError("required")) {
      return controlErrorMessage.username.required;
    }
    if (userControl.hasError("pattern")) {
      return controlErrorMessage.username.pattern;
    }
    return '';
  }

  get passwordErrors(): string {
    const userControl = this.loginForm.controls.clave;
    if (userControl.hasError("required")) {
      return controlErrorMessage.password.required;
    }
    if (userControl.hasError("pattern")) {
      return controlErrorMessage.password.pattern;
    }
    return '';
  }
}


