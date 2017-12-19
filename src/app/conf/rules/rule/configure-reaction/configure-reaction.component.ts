import {Component, OnInit} from '@angular/core';
import {AppRouting} from '../../../../app-routing';
import {RulesService} from '../../../../services/conf/rules/rules-service/rules-service.service';
import {ActivatedRoute} from '@angular/router';
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import {Breachscan} from '../../../../model/breachscan-api';
import ReactionRule = Breachscan.ReactionRule;
import {Constants} from '../../../../model/constants';

@Component({
  selector: 'app-configure-reaction',
  templateUrl: './configure-reaction.component.html',
  styleUrls: ['./configure-reaction.component.css']
})
export class ConfigureReactionComponent implements OnInit {
  reactionRule: ReactionRule;
  reactionRuleId: string;
  detectionEventTypes = Constants.detectionEventTypes;
  reactionTypes = Constants.reactionTypes;

  constructor(private route: ActivatedRoute,
              private rulesService: RulesService,
              private toastService: ToastService) {
    this.reactionRuleId = this.route.snapshot.paramMap.get(AppRouting.reactionRuleIdName);
  }

  ngOnInit() {
    this.getReactionRule();
  }

  getReactionRule() {
    this.rulesService.getReactionRule(this.reactionRuleId)
      .subscribe((response) => {
        this.reactionRule = response;
      });
  }

  updateReactionRule() {
    this.rulesService.updateReactionRule(this.reactionRule)
      .subscribe(() => {
        this.getReactionRule();
        this.toastService.popToast(ToastType.SUCCESS, 'Updated reaction rule', this.reactionRule.name);
      });
  }
}
