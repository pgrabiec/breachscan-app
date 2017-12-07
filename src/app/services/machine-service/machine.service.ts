import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {ErrorHandlerService} from '../error-handler/error-handler.service';
import {ApiRouting} from '../../api-routing';
import MachineId = Breachscan.MachineId;
import Machine = Breachscan.Machine;

@Injectable()
export class MachineService {
  private machinesUrl = environment.baseUri + ApiRouting.confMachines;  // URL to web api

  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  getMachineIds(): Observable<MachineId[]> {
    const result = this.http.get<MachineId[]>(this.machinesUrl)
      .pipe(
        catchError(this.errorHandler.handleError('getMachineIds', []))
      );

    result.subscribe((addresses) => this.errorHandler.log('MachineService: fetched machineIds'));

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
