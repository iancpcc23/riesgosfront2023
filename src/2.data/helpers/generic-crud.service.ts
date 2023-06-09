import {
  HttpClient,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { CustomError } from '../entities/app-state.entity';
import { ResponseEntity } from '../entities/response.entity';

@Injectable({
  providedIn: 'root',
})
export class GenericCRUDService {
  constructor(private httpClient: HttpClient) {}

  // getApiData<T>(apiUrl: string): Observable<T> {
  //   return this.httpClient
  //     .get<T>(apiUrl)
  //     .pipe(catchError((err) => this.handleError(err)));
  // }

  // postApiData(apiUrl: string, params:{ data?: any,headers?: object}): Observable<any> {
  //   return this.httpClient.post(apiUrl, params)
  //     .pipe(catchError((err) => this.handleError(err)));
  // }

  postApiData<T>(params: {
    url: string;
    body?: {};
  }): Observable<ResponseEntity<T>> {
    return this.httpClient
      .post<ResponseEntity<T>>(params.url, params.body)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: CustomError = {};
    // debugger;
    if (error.error instanceof ErrorEvent) {
      // Error de red
      errorMessage = {
        message: error.message,
        messageDeveloper: `Error: ${error.statusText}`,
        code: error.status,
      };
    }
    if (error.status == 0) {
      // El backend devuelve un código de estado HTTP
      errorMessage = {
        message: 'No se ha podido establecer conexión con el servidor',
        messageDeveloper: `Error Code: ${error.status}\nMessage: ${error.message}`,
        code: error.status,
      };
    } else {
      errorMessage = {
        message: error.error.Message,
        messageDeveloper: `Error Code: ${error.status}\nMessage: ${error.message}`,
        code: error.status,
      };
    }

    // Aquí puedes agregar cualquier comportamiento personalizado, como enviar un mensaje de error a una ventana emergente o redirigir a una página de error.

    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}

// let messageErrorHandler: CustomError;

// const { error, status, message } = err;
// if (error instanceof ErrorEvent) {
//   messageErrorHandler = {
//     code: status,
//     message: message,
//     messageDeveloper: error.message,
//   };
// }

// if (status === 0) {
//   messageErrorHandler = {
//     code: status,
//     messageDeveloper: message,
//     message: 'No se pudo conectar con el servidor',
//   };
// } else {
//   messageErrorHandler = {
//     code: status,
//     messageDeveloper: error.message,
//     message: error.error,
//   };
// }
