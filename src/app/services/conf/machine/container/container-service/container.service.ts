import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {ErrorHandlerService} from '../../../../misc/error-handler/error-handler.service';
import {Breachscan} from '../../../../../model/breachscan-api';
import {ApiRouting} from '../../../../../api-routing';
import Container = Breachscan.Container;

@Injectable()
export class ContainerService {
  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  getContainer(machineAddress: string, containerId: string): Observable<Container> {
    return this.http.get<Container>(
      ApiRouting.replaceContainer(
        ApiRouting.confContainerId,
        machineAddress,
        containerId
      ))
      .pipe(catchError(
        this.errorHandler.handleError('get container', 200, null, {
          404: 'Machine or container not found'
        })
      ));
  }

  deleteContainer(machineAddress: string, containerId: string): Observable<any> {
    return this.http.delete<any>(
      ApiRouting.replaceContainer(
        ApiRouting.confContainerId,
        machineAddress,
        containerId
      ))
      .pipe(catchError(
        this.errorHandler.handleError('delete container', 200, null, {
          404: 'Machine or container not found'
        })
      ));
  }

  saveContainer(machineAddress: string, container: Container): Observable<any> {
    return this.http.post<any>(
      ApiRouting.replaceMachineAddress(
        ApiRouting.confContainers,
        machineAddress
      ),
      container
    )
      .pipe(catchError(
        this.errorHandler.handleError('save container', 201, null, {
          404: 'Machine not found',
          409: 'Container already exists'
        })
      ));
  }

  updateContainer(machineAddress: string, container: Container): Observable<any> {
    return this.http.patch<any>(
      ApiRouting.replaceContainer(
        ApiRouting.confContainerId,
        machineAddress,
        container.id
      ),
      container
    )
      .pipe(catchError(
        this.errorHandler.handleError('update container', 200, null, {
          404: 'Machine or container not found'
        })
      ));
  }
}
