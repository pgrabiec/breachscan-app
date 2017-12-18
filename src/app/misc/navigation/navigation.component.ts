import {Component, OnInit} from '@angular/core';
import {AppRouting} from '../../app-routing';
import {WebsocketMonitoringService} from '../../services/websocket/monitoring/websocket-monitoring.service';
import {WebsocketReactionService} from '../../services/websocket/reaction/websocket-reaction.service';
import {WebsocketDetectionService} from '../../services/websocket/detection/websocket-detection.service';
import {ToastService, ToastType} from '../../services/misc/toast/toast.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  homeRoute = AppRouting.home;
  machinesRoute = AppRouting.confMachines;
  rulesRoute = AppRouting.confRules;
  stateRoute = AppRouting.state;
  eventsRoute = AppRouting.events;

  constructor(private webSocketDetectionService: WebsocketDetectionService,
              private reactionWebSocketService: WebsocketReactionService,
              private monitoringWebSocketService: WebsocketMonitoringService,
              private toastService: ToastService) {
  }

  ngOnInit() {
    // this.webSocketDetectionService.messages.subscribe((message) => {
    //   this.toastService.popToast(ToastType.INFO, message.data, '');
    // });
    // this.reactionWebSocketService.messages.subscribe((message) => {
    //   this.toastService.popToast(ToastType.INFO, message.data, '');
    // });
    // this.monitoringWebSocketService.messages.subscribe((message) => {
    //   this.toastService.popToast(ToastType.INFO, message.data, '');
    // });
  }

}
