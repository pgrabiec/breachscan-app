import {Component, OnInit} from '@angular/core';
import {AppRouting} from '../../../../app-routing';
import {RulesService} from '../../../../services/conf/rules/rules-service/rules-service.service';
import {ActivatedRoute} from '@angular/router';
import {RuleDetails} from '../configure-rule/RuleDetails';
import {RuleDetailsMapper} from '../configure-rule/RuleDetailsMapper';
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-configure-reaction',
  templateUrl: './configure-reaction.component.html',
  styleUrls: ['./configure-reaction.component.css']
})
export class ConfigureReactionComponent implements OnInit {
  reactionRule: RuleDetails;
  propertyNames: string[];
  reactionRuleId: string;

  constructor(private route: ActivatedRoute,
              private rulesService: RulesService) {
    this.reactionRuleId = this.route.snapshot.paramMap.get(AppRouting.reactionRuleIdName);
  }

  ngOnInit() {
    this.getReactionRule();
  }

  getReactionRule() {
    this.rulesService.getReactionRule(this.reactionRuleId)
      .subscribe((response) => {
        this.reactionRule = RuleDetailsMapper.createReactionDetails(response);
        this.propertyNames = Object.keys(response.properties);
      });
  }

  updateCallback = function (rulesService: RulesService,
                             toastService: ToastService,
                             ruleDetails: RuleDetails) {

    const reactionRule = RuleDetailsMapper.createReaction(ruleDetails);
    rulesService.updateReactionRule(reactionRule)
      .subscribe((response) => {
        toastService.popToast(ToastType.SUCCESS, 'Updated reaction rule', reactionRule.name);
      });
  };

  resetFunction = function (rulesService: RulesService,
                            reactionRuleId: string): Observable<RuleDetails> {
    return rulesService.getReactionRule(reactionRuleId)
      .pipe(
        map(RuleDetailsMapper.createReactionDetails)
      );
  };
}
