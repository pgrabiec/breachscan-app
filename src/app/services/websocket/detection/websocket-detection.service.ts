import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {WebsocketService} from '../websocket.service';
import {environment} from '../../../../environments/environment.prod';

@Injectable()
export class WebsocketDetectionService {
  url = (environment.baseUri + 'live/detection').replace('http', 'ws');

  public messages: Subject<any>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService.connect(this.url);
  }
}
