import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorHandlerService} from '../misc/error-handler/error-handler.service';
import {Observable} from 'rxjs/Observable';
import {Breachscan} from '../../model/breachscan-api';
import {ApiRouting} from '../../api-routing';
import {catchError} from 'rxjs/operators';
import MonitoringState = Breachscan.MonitoringState;

@Injectable()
export class StateService {
  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  getState(): Observable<MonitoringState> {
    return this.http.get<MonitoringState>(
      ApiRouting.state
    )
      .pipe(catchError(
        this.errorHandler.handleError('get state', 200, null)
      ));
  }

  updateState(): Observable<any> {
    return this.http.post<any>(ApiRouting.stateMachines, null)
      .pipe(catchError(
        this.errorHandler.handleError('update state', 200, null, {
          503: 'No interaction module online to handle interaction'
        })
      ));
  }

  stopMonitoring(): Observable<any> {
    return this.http.delete<any>(ApiRouting.stateMachines)
      .pipe(catchError(
        this.errorHandler.handleError('stop monitoring', 200, null)
      ));
  }

  getInteractionModules(): Observable<string[]> {
    return this.http.get<string[]>(ApiRouting.stateModulesInteraction)
      .pipe(catchError(
        this.errorHandler.handleError('get interaction modules', 200, [])
      ));
  }

  getDetectionModules(): Observable<string[]> {
    return this.http.get<string[]>(ApiRouting.stateModulesDetection)
      .pipe(catchError(
        this.errorHandler.handleError('get detection modules', 200, [])
      ));
  }

  getReactionModules(): Observable<string[]> {
    return this.http.get<string[]>(ApiRouting.stateModulesReaction)
      .pipe(catchError(
        this.errorHandler.handleError('get reaction modules', 200, [])
      ));
  }
}
