import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../../../environments/environment.prod';

@Injectable()
export class WebsocketInteractionService {
  url = (environment.baseUri + 'live/interaction').replace('http', 'ws');

  public messages: Subject<any>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService.connect(this.url);
  }
}
