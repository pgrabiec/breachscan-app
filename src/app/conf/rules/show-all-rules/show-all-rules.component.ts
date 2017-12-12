import {Component, OnInit} from '@angular/core';
import {RulesService} from '../../../services/conf/rules/rules-service/rules-service.service';
import {RuleInfo} from '../../machines/containers/rules/assign-rule/rule-info';
import {RuleMapper} from '../../machines/containers/rules/assign-rule/RuleMapper';
import {AppRouting} from '../../../app-routing';
import {ApiRouting} from '../../../api-routing';
import {ToastService, ToastType} from '../../../services/misc/toast/toast.service';

@Component({
  selector: 'app-show-all-rules',
  templateUrl: './show-all-rules.component.html',
  styleUrls: ['./show-all-rules.component.css']
})
export class ShowRulesComponent implements OnInit {
  interactionRules: RuleInfo[];
  detectionRules: RuleInfo[];
  reactionRules: RuleInfo[];

  addInteractionRoute = AppRouting.confAddInteraction;
  addDetectionRoute = AppRouting.confAddDetection;
  addReactionRoute = AppRouting.confAddReaction;

  showInteractionRoute = ApiRouting.confInteractions;
  showDetectionRoute = ApiRouting.confDetections;
  showReactionRoute = ApiRouting.confReactions;

  constructor(private rulesService: RulesService,
              private toastService: ToastService) {
  }

  ngOnInit() {
    this.getRules();
  }

  getRules() {
    this.getInteractions();
    this.getDetections();
    this.getReactions();
  }

  getInteractions() {
    this.rulesService.getInteractionRules()
      .subscribe((response) => this.interactionRules = response.map(RuleMapper.interactionInfo));
  }

  getDetections() {
    this.rulesService.getDetectionRules()
      .subscribe((response) => this.detectionRules = response.map(RuleMapper.detectionInfo));
  }

  getReactions() {
    this.rulesService.getReactionRules()
      .subscribe((response) => this.reactionRules = response.map(RuleMapper.reactionInfo));
  }

  deleteInteractionRule(interactionRuleId: string) {
    this.rulesService.deleteInteractionRule(interactionRuleId)
      .subscribe((response) => {
        this.toastService.popToast(
          ToastType.SUCCESS,
          'Deleted interaction rule',
          interactionRuleId
        );
        this.getInteractions();
      });
  }

  deleteDetectionRule(detectionRuleId: string) {
    this.rulesService.deleteDetectionRule(detectionRuleId)
      .subscribe((response) => {
        this.toastService.popToast(
          ToastType.SUCCESS,
          'Deleted detection rule',
          detectionRuleId
        );
        this.getDetections();
      });
  }

  deleteReactionRule: Function = (reactionRuleId: string) => {
    this.rulesService.deleteReactionRule(reactionRuleId)
      .subscribe((response) => {
        this.toastService.popToast(
          ToastType.SUCCESS,
          'Deleted reaction rule',
          reactionRuleId
        );
        this.getReactions();
      });
  }
}
