import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {ErrorHandlerService} from '../error-handler/error-handler.service';
import {Breachscan} from '../../model/breachscan-api';
import Container = Breachscan.Container;

@Injectable()
export class ContainerService {
  private machinesUrl = environment.baseUri + '/machines';  // URL to web api

  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  getContainers(machineAddress: string): Observable<Container[]> {
    return this.http.get<Container[]>(this.machinesUrl + '/' + machineAddress + '/containers')
      .pipe(catchError(
        this.errorHandler.handleError('get containers', 200, [])
      ));
  }

  getContainer(machineAddress: string, containerId: string): Observable<Container> {
    return this.http.get<Container>(this.machinesUrl + '/' + machineAddress + '/containers/' + containerId)
      .pipe(catchError(
        this.errorHandler.handleError('get container', 200, null)
      ));
  }
}
