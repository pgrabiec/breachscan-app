import { Component, OnInit } from '@angular/core';
import {AppRouting} from '../../../../app-routing';
import {RulesService} from '../../../../services/conf/rules/rules-service/rules-service.service';
import {ActivatedRoute} from '@angular/router';
import {RuleDetails} from '../configure-rule/RuleDetails';
import {RuleDetailsMapper} from '../configure-rule/RuleDetailsMapper';
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-configure-detection',
  templateUrl: './configure-detection.component.html',
  styleUrls: ['./configure-detection.component.css']
})
export class ConfigureDetectionComponent implements OnInit {
  propertyNames: string[];
  detectionRule: RuleDetails;
  detectionRuleId: string;

  constructor(private route: ActivatedRoute,
              private rulesService: RulesService) {
    this.detectionRuleId = this.route.snapshot.paramMap.get(AppRouting.detectionRuleIdName);
  }

  ngOnInit() {
    this.getDetectionRule();
  }

  getDetectionRule() {
    this.rulesService.getDetectionRule(this.detectionRuleId)
      .subscribe((response) => {
        this.detectionRule = RuleDetailsMapper.createDetectionDetails(response);
        this.propertyNames = Object.keys(response.properties);
      });
  }

  updateCallback = function (rulesService: RulesService,
                             toastService: ToastService,
                             ruleDetails: RuleDetails) {

    const detectionRule = RuleDetailsMapper.createDetection(ruleDetails);
    rulesService.updateDetectionRule(detectionRule)
      .subscribe((response) => {
        toastService.popToast(ToastType.SUCCESS, 'Updated detection rule', detectionRule.name);
      });
  };

  resetFunction = function (rulesService: RulesService,
                            detectionRuleId: string): Observable<RuleDetails> {
    return rulesService.getDetectionRule(detectionRuleId)
      .pipe(
        map(RuleDetailsMapper.createDetectionDetails)
      );
  };
}
