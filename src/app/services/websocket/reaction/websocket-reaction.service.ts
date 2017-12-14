import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {Subject} from 'rxjs/Subject';
import {WebsocketService} from '../websocket.service';

@Injectable()
export class WebsocketReactionService {
  url = (environment.baseUri + 'live/reaction').replace('http', 'ws');

  public messages: Subject<any>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService.connect(this.url);
  }
}
