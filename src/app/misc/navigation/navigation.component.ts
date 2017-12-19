import {Component, OnInit} from '@angular/core';
import {AppRouting} from '../../app-routing';
import {WebSocketMonitoringService} from '../../services/websocket/monitoring/websocket-monitoring.service';
import {WebSocketReactionService} from '../../services/websocket/reaction/websocket-reaction.service';
import {WebSocketDetectionService} from '../../services/websocket/detection/websocket-detection.service';
import {ToastService} from '../../services/misc/toast/toast.service';

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

  // Services to listen to events since application startup
  constructor(private webSocketDetectionService: WebSocketDetectionService,
              private reactionWebSocketService: WebSocketReactionService,
              private monitoringWebSocketService: WebSocketMonitoringService,
              private toastService: ToastService) {
  }

  ngOnInit() {
  }

}
