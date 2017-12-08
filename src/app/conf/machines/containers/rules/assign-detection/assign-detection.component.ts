import { Component, OnInit } from '@angular/core';
import {AppRouting} from '../../../../../app-routing';
import {RulesService} from '../../../../../services/conf/rules/rules-service/rules-service.service';
import {ActivatedRoute} from '@angular/router';
import {RuleInfo} from '../assign-rule/rule-info';
import {RuleMapper} from '../assign-rule/RuleMapper';
import {ToastService, ToastType} from '../../../../../services/misc/toast/toast.service';
import {Breachscan} from '../../../../../model/breachscan-api';
import RuleAssignmentRequest = Breachscan.RuleAssignmentRequest;
import {ContainerRulesService} from '../../../../../services/conf/machine/container/container-rules-service/container-rules.service';

@Component({
  selector: 'app-assign-detection',
  templateUrl: './assign-detection.component.html',
  styleUrls: ['./assign-detection.component.css']
})
export class AssignDetectionComponent implements OnInit {
  machineAddress: string;
  containerId: string;
  detectionRules: RuleInfo[];
  constructor(private route: ActivatedRoute,
              private rulesService: RulesService) {
    this.machineAddress = this.route.snapshot.paramMap.get(AppRouting.machineAddressName);
    this.containerId = this.route.snapshot.paramMap.get(AppRouting.containerIdName);
  }

  ngOnInit() {
    this.getDetectionRules();
  }

  getDetectionRules() {
    this.rulesService.getDetectionRules()
      .subscribe((response) => {
        this.detectionRules = response.map(
          rule => RuleMapper.detectionInfo(rule)
        );
      });
  }

  assignDetectionRule = function (machineAddress: string,
                                  containerId: string,
                                  containerRulesService: ContainerRulesService,
                                  toastService: ToastService,
                                  detectionRuleId: string) {
    const request = new RuleAssignmentRequest();
    request.active = false;
    request.rule = detectionRuleId;

    containerRulesService.assignDetectionRule(
      machineAddress,
      containerId,
      request
    ).subscribe((response) => {
      toastService.popToast(ToastType.SUCCESS, 'Assigned detection rule', detectionRuleId);
    });
  };
}
