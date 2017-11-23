import {Injectable} from '@angular/core';
import {Machine} from '../../model/machine/machine';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from '../message-service/message.service';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class MachineService {
  private machinesUrl = environment.baseUri + '/machines';  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  getMachineAddresses(): Observable<string[]> {
    const result = this.http.get<string[]>(this.machinesUrl)
      .pipe(
        catchError(this.handleError('getMachineAddresses', []))
      );

    result.subscribe((addresses) => this.log('MachineService: fetched machines'));

    return result;
  }

  getMachine(address: string): Observable<Machine> {
    const result = this.http.get<Machine>(this.machinesUrl + '/' + address)
      .pipe(
        catchError(this.handleError('getMachine', null))
      );

    result.subscribe((addresses) => this.log(`MachineService: fetched machine ${address}`));

    return result;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('MachineService: ' + message);
  }
}
