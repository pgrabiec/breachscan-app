import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {ErrorHandlerService} from '../../../../misc/error-handler/error-handler.service';
import {Breachscan} from '../../../../../model/breachscan-api';
import {ApiRouting} from '../../../../../api-routing';
import ContainerId = Breachscan.ContainerId;
import Container = Breachscan.Container;

@Injectable()
export class ContainerService {
  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  getContainerIds(machineAddress: string): Observable<ContainerId[]> {
    return this.http.get<ContainerId[]>(
      ApiRouting.replaceMachineAddress(
        ApiRouting.confContainers,
        machineAddress
      ))
      .pipe(catchError(
        this.errorHandler.handleError('get container IDs', 200, [])
      ));
  }

  getContainer(machineAddress: string, containerId: string): Observable<Container> {
    return this.http.get<Container>(
      ApiRouting.replaceContainer(
        ApiRouting.confContainerId,
        machineAddress,
        containerId
      ))
      .pipe(catchError(
        this.errorHandler.handleError('get container', 200, null)
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
        this.errorHandler.handleError('delete container', 200, null)
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
        this.errorHandler.handleError('save container', 201, null)
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
        this.errorHandler.handleError('update container', 200, null)
      ));
  }
}
