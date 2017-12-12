import {Component, OnInit} from '@angular/core';
import {RuleDetails} from '../configure-rule/RuleDetails';
import {ActivatedRoute} from '@angular/router';
import {RulesService} from '../../../../services/conf/rules/rules-service/rules-service.service';
import {AppRouting} from '../../../../app-routing';
import {RuleDetailsMapper} from '../configure-rule/RuleDetailsMapper';
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-configure-interaction',
  templateUrl: './configure-interaction.component.html',
  styleUrls: ['./configure-interaction.component.css']
})
export class ConfigureInteractionComponent implements OnInit {
  interactionRule: RuleDetails;
  propertyNames: string[];
  interactionRuleId: string;

  constructor(private route: ActivatedRoute,
              private rulesService: RulesService) {
    this.interactionRuleId = this.route.snapshot.paramMap.get(AppRouting.interactionRuleIdName);
  }

  ngOnInit() {
    this.getInteractionRule();
  }

  getInteractionRule() {
    this.rulesService.getInteractionRule(this.interactionRuleId)
      .subscribe((response) => {
        this.interactionRule = RuleDetailsMapper.createInteractionDetails(response);
        this.propertyNames = Object.keys(response.properties);
      });
  }

  updateCallback = function (rulesService: RulesService,
                             toastService: ToastService,
                             ruleDetails: RuleDetails) {

    const interactionRule = RuleDetailsMapper.createInteraction(ruleDetails);
    rulesService.updateInteractionRule(interactionRule)
      .subscribe((response) => {
        toastService.popToast(ToastType.SUCCESS, 'Updated interaction rule', interactionRule.name);
      });
  };

  resetFunction = function (rulesService: RulesService,
                            interactionRuleId: string): Observable<RuleDetails> {
    return rulesService.getInteractionRule(interactionRuleId)
      .pipe(
        map(RuleDetailsMapper.createInteractionDetails)
      );
  };
}
