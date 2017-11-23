import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../message-service/message.service';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {Container} from '../../model/machine/container/container';
import {ErrorHandlerService} from '../error-handler/error-handler.service';

@Injectable()
export class ContainerService {
  private machinesUrl = environment.baseUri + '/machines';  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService) {
  }

  getContainers(machineAddress: string): Observable<Container[]> {
    const result = this.http.get<Container[]>(this.machinesUrl + '/' + machineAddress + '/containers')
      .pipe(
        catchError(this.errorHandler.handleError('getContainers', []))
      );

    result.subscribe((addresses) => this.errorHandler.log('ContainerService: fetched containers'));

    return result;
  }

  getContainer(machineAddress: string, containerId: string): Observable<Container> {
    const result = this.http.get<Container>(this.machinesUrl + '/' + machineAddress + '/containers/' + containerId)
      .pipe(
        catchError(this.errorHandler.handleError('getMachine', null))
      );

    result.subscribe((addresses) => this.errorHandler.log(
      `ContainerService: fetched container ${containerId} for machine ${machineAddress}`
    ));

    return result;
  }
}
