import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Breachscan} from '../../../../model/breachscan-api';
import {AppRouting} from '../../../../app-routing';
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import {ContainerService} from '../../../../services/conf/machine/container/container-service/container.service';
import {ContainerRulesService} from '../../../../services/conf/machine/container/container-rules-service/container-rules.service';
import Container = Breachscan.Container;
import InteractionAssignment = Breachscan.InteractionAssignment;
import DetectionAssignment = Breachscan.DetectionAssignment;
import ReactionAssignment = Breachscan.ReactionAssignment;
import RuleAssignmentRequest = Breachscan.RuleAssignmentRequest;

@Component({
  selector: 'app-container-configuration',
  templateUrl: './container-configuration.component.html',
  styleUrls: ['./container-configuration.component.css']
})
export class ContainerConfigurationComponent implements OnInit {
  machineAddress: string;
  containerId: string;
  container: Container;

  assignInteractionRuleRoute;
  assignDetectionRuleRoute;
  assignReactionRuleRoute;

  interactionRulesRoute = AppRouting.confInteractions;
  detectionRulesRoute = AppRouting.confDetections;
  reactionRulesRoute = AppRouting.confReactions;

  interactions: InteractionAssignment[];
  detections: DetectionAssignment[];
  reactions: ReactionAssignment[];

  constructor(private route: ActivatedRoute,
              private toastService: ToastService,
              private containerService: ContainerService,
              private containerRulesService: ContainerRulesService) {
    this.machineAddress = this.route.snapshot.paramMap.get(AppRouting.machineAddressName);
    this.containerId = this.route.snapshot.paramMap.get(AppRouting.containerIdName);
    this.assignInteractionRuleRoute = AppRouting.replaceContainer(
      AppRouting.confContainerAssignInteraction,
      this.machineAddress,
      this.containerId
    );
    this.assignDetectionRuleRoute = AppRouting.replaceContainer(
      AppRouting.confContainerAssignDetection,
      this.machineAddress,
      this.containerId
    );
    this.assignReactionRuleRoute = AppRouting.replaceContainer(
      AppRouting.confContainerAssignReaction,
      this.machineAddress,
      this.containerId
    );
  }

  getContainer() {
    this.containerService.getContainer(this.machineAddress, this.containerId)
      .subscribe((container) => {
        this.container = container;
        this.interactions = Object.values<InteractionAssignment>(container.rules.interaction);
        this.detections = Object.values<DetectionAssignment>(container.rules.detection);
        this.reactions = Object.values<ReactionAssignment>(container.rules.reaction);
      });
  }

  ngOnInit() {
    this.getContainer();
  }

  updateContainer() {
    this.containerService.updateContainer(this.machineAddress, this.container)
      .subscribe(() => {
        this.getContainer();
        this.toastService.popToast(
          ToastType.SUCCESS,
          'Updated container',
          `${this.containerId}`
        );
      });
  }

  removeInteractionRule(ruleId: string) {
    this.containerRulesService.removeInteractionRuleFromContainer(
      this.machineAddress,
      this.containerId,
      ruleId
    ).subscribe(() => {
      this.getContainer();
      this.toastService.popToast(ToastType.SUCCESS, 'Removed interaction rule', ruleId);
    });
  }

  updateInteractionAssignment(interactionRuleId: string, active: boolean) {
    const assignment = new RuleAssignmentRequest();
    assignment.active = active;
    assignment.rule = interactionRuleId;

    this.containerRulesService.updateInteractionRuleAssignment(
      this.machineAddress,
      this.containerId,
      interactionRuleId,
      assignment
    ).subscribe(() => {
      this.getContainer();
      this.toastService.popToast(ToastType.SUCCESS, 'Updated interaction assignment', interactionRuleId);
    });
  }

  removeDetectionRule(ruleId: string) {
    this.containerRulesService.removeDetectionRuleFromContainer(
      this.machineAddress,
      this.containerId,
      ruleId
    ).subscribe(() => {
      this.getContainer();
      this.toastService.popToast(ToastType.SUCCESS, 'Removed detection rule', ruleId);
    });
  }

  updateDetectionAssignment(detectionRuleId: string, active: boolean) {
    const assignment = new RuleAssignmentRequest();
    assignment.active = active;
    assignment.rule = detectionRuleId;

    this.containerRulesService.updateDetectionRuleAssignment(
      this.machineAddress,
      this.containerId,
      detectionRuleId,
      assignment
    ).subscribe(() => {
      this.getContainer();
      this.toastService.popToast(ToastType.SUCCESS, 'Updated detection assignment', detectionRuleId);
    });
  }

  removeReactionRule(ruleId: string) {
    this.containerRulesService.removeReactionRuleFromContainer(
      this.machineAddress,
      this.containerId,
      ruleId
    ).subscribe(() => {
      this.getContainer();
      this.toastService.popToast(ToastType.SUCCESS, 'Removed reaction rule', ruleId);
    });
  }

  updateReactionAssignment(reactionRuleId: string, active: boolean) {
    const assignment = new RuleAssignmentRequest();
    assignment.active = active;
    assignment.rule = reactionRuleId;

    this.containerRulesService.updateReactionRuleAssignment(
      this.machineAddress,
      this.containerId,
      reactionRuleId,
      assignment
    ).subscribe(() => {
      this.getContainer();
      this.toastService.popToast(ToastType.SUCCESS, 'Updated reaction assignment', reactionRuleId);
    });
  }

  resetContainer() {
    this.getContainer();
  }
}
