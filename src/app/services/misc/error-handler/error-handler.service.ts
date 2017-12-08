import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {ToastService, ToastType} from '../toast/toast.service';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ErrorHandlerService {

  constructor(private toastService: ToastService) {
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   * @param expectedStatus
   */
  public handleError<T>(operation = 'operation', expectedStatus: number, result?: T) {
    return (response: HttpErrorResponse): Observable<T> => {
      if (response.status !== expectedStatus) {
        console.error(response);
        this.toastService.popToast(ToastType.ERROR, `${operation} failed`, response.message);
        return of();
      }

      return of(result as T);
    };
  }
}
