import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorHandlerService} from '../misc/error-handler/error-handler.service';
import {Observable} from 'rxjs/Observable';
import {Breachscan} from '../../model/breachscan-api';
import {ApiRouting} from '../../api-routing';
import {catchError} from 'rxjs/operators';
import MachineState = Breachscan.MachineState;

@Injectable()
export class StateService {
  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  getState(): Observable<MachineState[]> {
    return this.http.get<MachineState[]>(
      ApiRouting.stateMachines
    )
      .pipe(catchError(
        this.errorHandler.handleError('get state', 200, null)
      ));
  }

  updateState(): Observable<any> {
    return this.http.post<any>(ApiRouting.stateMachines, null)
      .pipe(catchError(
        this.errorHandler.handleError('update state', 200, null)
      ));
  }

  stopMonitoring(): Observable<any> {
    return this.http.delete<any>(ApiRouting.stateMachines)
      .pipe(catchError(
        this.errorHandler.handleError('stop monitoring', 200, null)
      ));
  }
}
