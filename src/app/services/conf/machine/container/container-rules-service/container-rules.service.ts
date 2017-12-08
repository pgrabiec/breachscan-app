import {Injectable} from '@angular/core';
import {ErrorHandlerService} from '../../../../misc/error-handler/error-handler.service';
import {HttpClient} from '@angular/common/http';
import {Breachscan} from '../../../../../model/breachscan-api';
import {ApiRouting} from '../../../../../api-routing';
import {catchError} from 'rxjs/operators';
import RuleAssignmentRequest = Breachscan.RuleAssignmentRequest;

@Injectable()
export class ContainerRulesService {
  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  assignInteractionRule(machineAddress: string, containerId: string, assignmentRequest: RuleAssignmentRequest) {
    return this.http.post<any>(
      ApiRouting.replaceContainer(
        ApiRouting.confContainerInteractions,
        machineAddress,
        containerId
      ),
      assignmentRequest
    )
      .pipe(catchError(
        this.errorHandler.handleError('assign interaction rule', 201, null)
      ));
  }

  removeInteractionRuleFromContainer(machineAddress: string, containerId: string, interactionRuleId: string) {
    return this.http.delete<any>(
      ApiRouting.replaceContainerInteraction(
        ApiRouting.confContainerInteractionId,
        machineAddress,
        containerId,
        interactionRuleId
      ))
      .pipe(catchError(
        this.errorHandler.handleError('remove interaction rule from container', 200, null)
      ));
  }

  assignDetectionRule(machineAddress: string, containerId: string, assignmentRequest: RuleAssignmentRequest) {
    return this.http.post<any>(
      ApiRouting.replaceContainer(
        ApiRouting.confContainerDetections,
        machineAddress,
        containerId
      ),
      assignmentRequest
    )
      .pipe(catchError(
        this.errorHandler.handleError('assign detection rule', 201, null)
      ));
  }

  removeDetectionRuleFromContainer(machineAddress: string, containerId: string, detectionRuleId: string) {
    return this.http.delete<any>(
      ApiRouting.replaceContainerDetection(
        ApiRouting.confContainerDetectionId,
        machineAddress,
        containerId,
        detectionRuleId
      ))
      .pipe(catchError(
        this.errorHandler.handleError('remove detection rule from container', 200, null)
      ));
  }

  assignReactionRule(machineAddress: string, containerId: string, assignmentRequest: RuleAssignmentRequest) {
    return this.http.post<any>(
      ApiRouting.replaceContainer(
        ApiRouting.confContainerReactions,
        machineAddress,
        containerId
      ),
      assignmentRequest
    )
      .pipe(catchError(
        this.errorHandler.handleError('assign reaction rule', 201, null)
      ));
  }

  removeReactionRuleFromContainer(machineAddress: string, containerId: string, reactionRuleId: string) {
    return this.http.delete<any>(
      ApiRouting.replaceContainerReaction(
        ApiRouting.confContainerReactionId,
        machineAddress,
        containerId,
        reactionRuleId
      ))
      .pipe(catchError(
        this.errorHandler.handleError('remove reaction rule from container', 200, null)
      ));
  }

  updateInteractionRuleAssignment(machineAddress: string,
                                  containerId: string,
                                  interactionRuleId: string,
                                  interactionRuleAssignment: RuleAssignmentRequest) {
    return this.http.patch<any>(
      ApiRouting.replaceContainerInteraction(
        ApiRouting.confContainerInteractionId,
        machineAddress,
        containerId,
        interactionRuleId
      ),
      interactionRuleAssignment
    )
      .pipe(catchError(
        this.errorHandler.handleError('update interaction rule assignment', 200, null)
      ));
  }

  updateDetectionRuleAssignment(machineAddress: string,
                                containerId: string,
                                detectionRuleId: string,
                                detectionRuleAssignment: RuleAssignmentRequest) {
    return this.http.patch<any>(
      ApiRouting.replaceContainerDetection(
        ApiRouting.confContainerDetectionId,
        machineAddress,
        containerId,
        detectionRuleId
      ),
      detectionRuleAssignment
    )
      .pipe(catchError(
        this.errorHandler.handleError('update detection rule assignment', 200, null)
      ));
  }

  updateReactionRuleAssignment(machineAddress: string,
                               containerId: string,
                               reactionRuleId: string,
                               reactionRuleAssignment: RuleAssignmentRequest) {
    return this.http.patch<any>(
      ApiRouting.replaceContainerReaction(
        ApiRouting.confContainerReactionId,
        machineAddress,
        containerId,
        reactionRuleId
      ),
      reactionRuleAssignment
    )
      .pipe(catchError(
        this.errorHandler.handleError('update reaction rule assignment', 200, null)
      ));
  }
}
