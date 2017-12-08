import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorHandlerService} from '../../../misc/error-handler/error-handler.service';
import {Observable} from 'rxjs/Observable';
import {Breachscan} from '../../../../model/breachscan-api';
import InteractionRule = Breachscan.InteractionRule;
import {ApiRouting} from '../../../../api-routing';
import {catchError} from 'rxjs/operators';
import DetectionRule = Breachscan.DetectionRule;
import ReactionRule = Breachscan.ReactionRule;

@Injectable()
export class RulesService {
  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  getInteractionRules(): Observable<InteractionRule[]> {
    return this.http.get<InteractionRule[]>(ApiRouting.confInteractions)
      .pipe(catchError(
        this.errorHandler.handleError('get interaction rules', 200, [])
      ));
  }

  getDetectionRules(): Observable<DetectionRule[]> {
    return this.http.get<DetectionRule[]>(ApiRouting.confDetections)
      .pipe(catchError(
        this.errorHandler.handleError('get detection rules', 200, [])
      ));
  }

  getReactionRules(): Observable<ReactionRule[]> {
    return this.http.get<ReactionRule[]>(ApiRouting.confReactions)
      .pipe(catchError(
        this.errorHandler.handleError('get reaction rules', 200, [])
      ));
  }

  deleteInteractionRule(ruleId: string): Observable<any> {
    return this.http.delete(
      ApiRouting.replaceInteractionRuleId(
        ApiRouting.confInteractionId,
        ruleId
      )
    )
      .pipe(catchError(
        this.errorHandler.handleError('delete interaction rule', 200, null)
      ));
  }

  deleteDetectionRule(ruleId: string): Observable<any> {
    return this.http.delete(
      ApiRouting.replaceDetectionRuleId(
        ApiRouting.confDetectionId,
        ruleId
      )
    )
      .pipe(catchError(
        this.errorHandler.handleError('delete detection rule', 200, null)
      ));
  }

  deleteReactionRule(ruleId: string): Observable<any> {
    return this.http.delete(
      ApiRouting.replaceReactionRuleId(
        ApiRouting.confReactionId,
        ruleId
      )
    )
      .pipe(catchError(
        this.errorHandler.handleError('delete reaction rule', 200, null)
      ));
  }

  updateInteractionRule(interactionRule: InteractionRule): Observable<any> {
    return this.http.patch(
      ApiRouting.replaceInteractionRuleId(
        ApiRouting.confInteractionId,
        interactionRule.id
      ),
      interactionRule
    )
      .pipe(catchError(
        this.errorHandler.handleError('update interaction rule', 200, null)
      ));
  }

  updateDetectionRule(detectionRule: DetectionRule): Observable<any> {
    return this.http.patch(
      ApiRouting.replaceDetectionRuleId(
        ApiRouting.confDetectionId,
        detectionRule.id
      ),
      detectionRule
    )
      .pipe(catchError(
        this.errorHandler.handleError('update detection rule', 200, null)
      ));
  }

  updateReactionRule(reactionRule: ReactionRule): Observable<any> {
    return this.http.patch(
      ApiRouting.replaceReactionRuleId(
        ApiRouting.confReactionId,
        reactionRule.id
      ),
      reactionRule
    )
      .pipe(catchError(
        this.errorHandler.handleError('update reaction rule', 200, null)
      ));
  }

  getInteractionRule(interactionRuleId: string): Observable<InteractionRule> {
    return this.http.get<InteractionRule>(
      ApiRouting.replaceInteractionRuleId(
        ApiRouting.confInteractionId,
        interactionRuleId
      )
    )
      .pipe(catchError(
        this.errorHandler.handleError('get interaction rule', 200, null)
      ));
  }

  getDetectionRule(detectionRuleId: string): Observable<DetectionRule> {
    return this.http.get<DetectionRule>(
      ApiRouting.replaceDetectionRuleId(
        ApiRouting.confDetectionId,
        detectionRuleId
      )
    )
      .pipe(catchError(
        this.errorHandler.handleError('get detection rule', 200, null)
      ));
  }

  getReactionRule(reactionRuleId: string): Observable<ReactionRule> {
    return this.http.get<ReactionRule>(
      ApiRouting.replaceReactionRuleId(
        ApiRouting.confReactionId,
        reactionRuleId
      )
    )
      .pipe(catchError(
        this.errorHandler.handleError('get reaction rule', 200, null)
      ));
  }
}
