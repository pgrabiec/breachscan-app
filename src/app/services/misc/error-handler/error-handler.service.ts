import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {ToastService, ToastType} from '../toast/toast.service';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ErrorHandlerService {
  private defaultExplanations = {
    500: 'Something went wrong on the server',
    400: 'Invalid input',
  };

  constructor(private toastService: ToastService) {
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   * @param expectedStatus
   * @param explanations
   */
  public handleError<T>(operation = 'operation', expectedStatus: number, result?: T, explanations?: {}) {
    return (response: HttpErrorResponse): Observable<T> => {
      if (response.status !== expectedStatus) {
        const hasDefaultExplanation = this.defaultExplanations[response.status] != null;
        const isProvidedExplanation = explanations != null && explanations[response.status] != null;

        if (isProvidedExplanation) {
          this.toastService.popToast(ToastType.ERROR, `${operation} failed`, explanations[response.status]);
          return;
        }

        if (hasDefaultExplanation) {
          this.handleDefault(operation, response);
          return;
        }

        this.genericError(operation, response);

        return of();
      }

      return of(result as T);
    };
  }

  private handleDefault(operation: string, response: HttpErrorResponse) {
    const description = this.defaultExplanations[response.status];
    if (description == null) {
      this.genericError(operation, response);
    }
    this.toastService.popToast(ToastType.ERROR, `${operation} failed`, this.defaultExplanations[response.status]);
  }

  private genericError(operation: string, response: HttpErrorResponse) {
    this.toastService.popToast(ToastType.ERROR, `${operation} failed`, response.message);
  }
}
