import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ErrorHandlerService} from '../../../misc/error-handler/error-handler.service';
import {Breachscan} from '../../../../model/breachscan-api';
import {catchError} from 'rxjs/operators';
import MachineId = Breachscan.MachineId;
import Machine = Breachscan.Machine;
import {ApiRouting} from '../../../../api-routing';

@Injectable()
export class MachineService {
  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  getMachineIds(): Observable<MachineId[]> {
    return this.http.get<MachineId[]>(
      ApiRouting.confMachines
    )
      .pipe(catchError(
        this.errorHandler.handleError('get machine IDs', 200, null)
      ));
  }

  getMachine(address: string): Observable<Machine> {
    return this.http.get<Machine>(
      ApiRouting.replaceMachineAddress(
        ApiRouting.confMachineAddress,
        address
      ))
      .pipe(catchError(
        this.errorHandler.handleError('get machine', 200, null)
      ));
  }

  deleteMachine(address: string): Observable<any> {
    return this.http.delete<any>(
      ApiRouting.replaceMachineAddress(
        ApiRouting.confMachineAddress,
        address
      ))
      .pipe(catchError(
        this.errorHandler.handleError('delete machine', 200, null)
      ));
  }

  saveMachine(machine: Machine): Observable<any> {
    return this.http.post<any>(
      ApiRouting.confMachines,
      machine
    )
      .pipe(catchError(
        this.errorHandler.handleError('save machine', 201, null)
      ));
  }

  updateMachine(machine: Machine): Observable<any> {
    return this.http.patch<any>(
      ApiRouting.replaceMachineAddress(
        ApiRouting.confMachineAddress,
        machine.address
      ),
      machine
    )
      .pipe(catchError(
        this.errorHandler.handleError('update machine', 200, null)
      ));
  }
}
