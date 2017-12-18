import {Component, OnInit} from '@angular/core';
import {StateService} from '../../services/state/state.service';
import {ToastService, ToastType} from '../../services/misc/toast/toast.service';
import {Breachscan} from '../../model/breachscan-api';
import {RuleMonitoringStateInfo, RuleType} from './RuleMonitoringStateInfo';
import MonitoringState = Breachscan.MonitoringState;
import RuleMonitoringState = Breachscan.RuleMonitoringState;
import {WebsocketMonitoringService} from '../../services/websocket/monitoring/websocket-monitoring.service';

@Component({
  selector: 'app-show-state',
  templateUrl: './show-state.component.html',
  styleUrls: ['./show-state.component.css']
})
export class ShowStateComponent implements OnInit {
  states: RuleMonitoringStateInfo[];
  state: MonitoringState;

  machineFilter: string = null;
  containerFilter: string = null;
  ruleFilter: string = null;
  modulesFilter: number = null;

  filtersHidden = true;

  interactionModules = [];
  detectionModules = [];
  reactionModules = [];

  constructor(private stateService: StateService,
              private toastService: ToastService,
              private websocketMonitoringService: WebsocketMonitoringService) {
  }

  ngOnInit() {
    this.websocketMonitoringService.messages.subscribe((message) => {
      this.getState();
      this.toastService.popToast(ToastType.INFO, message.data, '');
    });
    this.getState();
  }

  getState() {
    this.stateService.getState()
      .subscribe((state) => {
        this.state = state;
        this.states = this.mapMonitoring(state.interaction, 'Interaction')
          .concat(this.mapMonitoring(state.detection, 'Detection'))
          .concat(this.mapMonitoring(state.reaction, 'Reaction'));
      });
    this.stateService.getInteractionModules()
      .subscribe((modules) => {
        this.interactionModules = modules;
      });
    this.stateService.getDetectionModules()
      .subscribe((modules) => {
        this.detectionModules = modules;
      });
    this.stateService.getReactionModules()
      .subscribe((modules) => {
        this.reactionModules = modules;
      });
  }

  forceUpdate() {
    this.stateService.updateState()
      .subscribe(() => {
        this.toastService.popToast(ToastType.SUCCESS, 'State update command accepted', '');
      });
  }

  stopAllMonitoring() {
    this.stateService.stopMonitoring()
      .subscribe(() => {
        this.toastService.popToast(ToastType.SUCCESS, 'Stop monitoring command accepted', '');
      });
  }

  showFilters() {
    this.filtersHidden = false;
  }

  hideFilters() {
    this.filtersHidden = true;
  }

  private mapMonitoring(states: RuleMonitoringState[], type: RuleType): RuleMonitoringStateInfo[] {
    return states.map((state) => {
      const info = new RuleMonitoringStateInfo();

      info.type = type;
      info.machine = state.machine;
      info.container = state.container;
      info.rule = state.rule;
      info.modules = state.modules;

      return info;
    });
  }
}
