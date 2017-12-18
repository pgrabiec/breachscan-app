import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {Subject} from 'rxjs/Subject';
import {WebsocketService} from '../websocket.service';
import {ToastService, ToastType} from '../../misc/toast/toast.service';

@Injectable()
export class WebsocketMonitoringService {
  url = (environment.baseUri + 'live/monitoring').replace('http', 'ws');

  public messages: Subject<any>;

  constructor(private wsService: WebsocketService,
              private toastService: ToastService) {
    this.messages = <Subject<any>>wsService.connect(this.url);
    this.messages.subscribe((message) => {
      toastService.popToast(ToastType.INFO, message.data, '');
    });
  }
}
