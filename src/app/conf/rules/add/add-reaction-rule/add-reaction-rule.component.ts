import {Component, OnInit} from '@angular/core';
import {Breachscan} from '../../../../model/breachscan-api';
import {RulesService} from '../../../../services/conf/rules/rules-service/rules-service.service';
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import ReactionRule = Breachscan.ReactionRule;
import ReactionType = Breachscan.ReactionType;
import DetectionEventType = Breachscan.DetectionEventType;

@Component({
  selector: 'app-add-reaction-rule',
  templateUrl: './add-reaction-rule.component.html',
  styleUrls: ['./add-reaction-rule.component.css']
})
export class AddReactionRuleComponent implements OnInit {
  anyInputReactionRule = new ReactionRule();

  reactionTypes: ReactionType[] = ['REACTION_RESTART_CONTAINER'];
  inputTypes: DetectionEventType[] = ['EVENT_EXEC'];

  constructor(private ruleService: RulesService,
              private toastService: ToastService) {
    this.anyInputReactionRule.input = this.inputTypes[0];
    this.anyInputReactionRule.output = this.reactionTypes[0];
  }

  ngOnInit() {
  }

  saveAnyInputReactionRule() {
    this.anyInputReactionRule.properties = {};
    this.anyInputReactionRule.type = 'REACTION_ANY_INPUT_EVENT';
    this.ruleService.saveReactionRule(this.anyInputReactionRule)
      .subscribe((response) => {
        this.toastService.popToast(ToastType.SUCCESS, 'Saved reaction rule', response.id);
      });
  }
}
