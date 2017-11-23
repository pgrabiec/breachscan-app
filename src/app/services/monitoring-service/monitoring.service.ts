import {Injectable} from '@angular/core';
import {Machine} from '../../model/machine/machine';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ErrorHandlerService} from '../error-handler/error-handler.service';

@Injectable()
export class MonitoringService {

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {
  }

  updateMonitoring(machine: Machine, active: boolean): Observable<any> {
    const uri = environment.baseUri + '/machines/' + machine.address + '/monitoring/active';
    if (active) {
      return this.http.post(uri, '').pipe(catchError(this.errorHandler.handleError<any>('start monitoring machine')));
    } else {
      return this.http.delete(uri).pipe(catchError(this.errorHandler.handleError<any>('stop monitoring machine')));
    }
  }
}
