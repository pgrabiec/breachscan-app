import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorHandlerService} from '../../misc/error-handler/error-handler.service';
import {Observable} from 'rxjs/Observable';
import {Breachscan} from '../../../model/breachscan-api';
import {ApiRouting} from '../../../api-routing';
import {catchError} from 'rxjs/operators';
import InteractionDataInfo = Breachscan.InteractionDataInfo;
import DetectionEventInfo = Breachscan.DetectionEventInfo;
import ReactionEventInfo = Breachscan.ReactionEventInfo;

@Injectable()
export class EventService {
  constructor(private http: HttpClient,
              private errorHandler: ErrorHandlerService) {
  }

  getInteractionData(): Observable<InteractionDataInfo[]> {
    return this.http.get<InteractionDataInfo[]>(
      ApiRouting.interactionEvents,
      {
        params: {
          'limit': '100'
        }
      }
  )
      .pipe(catchError(
        this.errorHandler.handleError('get interaction data', 200, null)
      ));
  }

  getDetectionEvents(): Observable<DetectionEventInfo[]> {
    return this.http.get<DetectionEventInfo[]>(
      ApiRouting.detectionEvents,
      {
        params: {
          'limit': '100'
        }
      }
    )
      .pipe(catchError(
        this.errorHandler.handleError('get detection events', 200, null)
      ));
  }

  getReactionEvents(): Observable<ReactionEventInfo[]> {
    return this.http.get<ReactionEventInfo[]>(
      ApiRouting.reactionEvents,
      {
        params: {
          'limit': '100'
        }
      }
    )
      .pipe(catchError(
        this.errorHandler.handleError('get reaction events', 200, null)
      ));
  }
}
