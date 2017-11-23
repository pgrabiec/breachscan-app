import {Injectable} from '@angular/core';
import {Machine} from '../../model/machine/machine';

import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {ErrorHandlerService} from '../error-handler/error-handler.service';

@Injectable()
export class MachineService {
  private machinesUrl = environment.baseUri + '/machines';  // URL to web api

  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  getMachineAddresses(): Observable<string[]> {
    const result = this.http.get<string[]>(this.machinesUrl)
      .pipe(
        catchError(this.errorHandler.handleError('getMachineAddresses', []))
      );

    result.subscribe((addresses) => this.errorHandler.log('MachineService: fetched machines'));

    return result;
  }

  getMachine(address: string): Observable<Machine> {
    const result = this.http.get<Machine>(this.machinesUrl + '/' + address)
      .pipe(
        catchError(this.errorHandler.handleError('getMachine', null))
      );

    result.subscribe((addresses) => this.errorHandler.log(`MachineService: fetched machine ${address}`));

    return result;
  }
}
