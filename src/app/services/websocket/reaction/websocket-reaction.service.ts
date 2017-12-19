import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {Subject} from 'rxjs/Subject';
import {WebSocketService} from '../websocket.service';
import {ToastService, ToastType} from '../../misc/toast/toast.service';

@Injectable()
export class WebSocketReactionService {
  url = (environment.baseUri + 'live/reaction').replace('http', 'ws');

  public messages: Subject<any>;

  constructor(private wsService: WebSocketService,
              private toastService: ToastService) {
    this.messages = <Subject<any>>wsService.connect(this.url);
    this.messages.subscribe((message) => {
      toastService.popToast(ToastType.INFO, message.data, '');
    });
  }
}
