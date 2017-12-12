import {Component, OnInit} from '@angular/core';
import {StateService} from '../../services/state/state.service';
import {ToastService, ToastType} from '../../services/misc/toast/toast.service';
import {RuleStateInfo} from './RuleStateInfo';

@Component({
  selector: 'app-show-state',
  templateUrl: './show-state.component.html',
  styleUrls: ['./show-state.component.css']
})
export class ShowStateComponent implements OnInit {
  states: RuleStateInfo[];

  constructor(private stateService: StateService,
              private toastService: ToastService) { }

  ngOnInit() {
    this.getState();
  }

  getState() {
    this.stateService.getState()
      .subscribe((machines) => {
        this.states = [];
        for (const machine of machines) {
          for (const container of Object.values(machine.containers)) {
            for (const interaction of Object.values(container.interactions)) {
              this.states.push(new RuleStateInfo(
                machine.machineAddress,
                container.containerId,
                interaction.interactionRuleId,
                interaction.interactionModules.length.toString()
              ));
            }
            for (const detection of Object.values(container.detections)) {
              this.states.push(new RuleStateInfo(
                machine.machineAddress,
                container.containerId,
                detection.detectionRuleId,
                detection.detectionModules.length.toString()
              ));
            }
            for (const reaction of Object.values(container.reactions)) {
              this.states.push(new RuleStateInfo(
                machine.machineAddress,
                container.containerId,
                reaction.reactionRuleId,
                reaction.reactionModules.length.toString()
              ));
            }
          }
        }
      });
  }

  forceUpdate() {
    this.stateService.updateState()
      .subscribe(() => {
        this.toastService.popToast(ToastType.SUCCESS, 'State updated', '');
      });
  }

  stopAllMonitoring() {
    this.stateService.stopMonitoring()
      .subscribe(() => {
        this.toastService.popToast(ToastType.SUCCESS, 'Stopped monitoring', '');
      });
  }
}
