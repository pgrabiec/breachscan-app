import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ErrorHandlerService} from '../error-handler/error-handler.service';
import {ApiRouting} from '../../api-routing';
import {Breachscan} from '../../model/breachscan-api';
import MachineId = Breachscan.MachineId;
import Machine = Breachscan.Machine;
import {catchError} from 'rxjs/operators';

@Injectable()
export class MachineService {
  private machinesUrl = environment.baseUri + ApiRouting.confMachines;  // URL to web api

  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  getMachineIds(): Observable<MachineId[]> {
    return this.http.get<MachineId[]>(this.machinesUrl)
      .pipe(catchError(
        this.errorHandler.handleError('get machine IDs', 200, null)
      ));
  }

  getMachine(address: string): Observable<Machine> {
    return this.http.get<Machine>(this.machinesUrl + '/' + address)
      .pipe(catchError(
        this.errorHandler.handleError('get machine', 200, null)
      ));
  }

  deleteMachine(address: String): Observable<string> {
    return this.http.delete<string>(this.machinesUrl + '/' + address)
      .pipe(catchError(
        this.errorHandler.handleError('delete machine', 200, null)
      ));
  }

  saveMachine(machine: Machine): Observable<string> {
    return this.http.post(this.machinesUrl, machine)
      .pipe(catchError(
        this.errorHandler.handleError('save machine', 201, null)
      ));
  }
}
