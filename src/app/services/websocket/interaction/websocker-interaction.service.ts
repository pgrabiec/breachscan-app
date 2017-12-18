import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../../../environments/environment.prod';
import {ToastService, ToastType} from '../../misc/toast/toast.service';

@Injectable()
export class WebsocketInteractionService {
  url = (environment.baseUri + 'live/interaction').replace('http', 'ws');

  public messages: Subject<any>;

  constructor(private wsService: WebsocketService,
              private toastService: ToastService) {
    this.messages = <Subject<any>>wsService.connect(this.url);
    this.messages.subscribe((message) => {
      toastService.popToast(ToastType.INFO, message.data, '');
    });
  }
}
