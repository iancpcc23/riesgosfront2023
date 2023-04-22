import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { CustomError } from '../entities/app-state.entity';

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

  postApiData<T>(params: { url: string; body: T }) {
    return this.httpClient
      .post(params.url, params.body)
      .pipe(catchError((err) => this.handleError(err)));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let messageErrorHandler: CustomError;
    const { error, status, message } = err;
    if (error instanceof ErrorEvent) {
      messageErrorHandler = {
        code: status,
        message: message,
        messageDeveloper: error.message,
      };
    }

    if (status === 0) {
      messageErrorHandler = {
        code: status,
        messageDeveloper: message,
        message: 'No se pudo conectar con el servidor',
      };
    } else {
      messageErrorHandler = {
        code: status,
        messageDeveloper: error.message,
        message: error.error,
      };
    }

    return throwError(() => messageErrorHandler);
  }
}
