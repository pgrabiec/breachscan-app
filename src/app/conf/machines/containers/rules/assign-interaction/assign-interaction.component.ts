import {Component, OnInit} from '@angular/core';
import {ToastService, ToastType} from '../../../../../services/misc/toast/toast.service';
import {ActivatedRoute} from '@angular/router';
import {AppRouting} from '../../../../../app-routing';
import {RuleInfo} from '../assign-rule/rule-info';
import {RuleMapper} from '../assign-rule/RuleMapper';
import {RulesService} from '../../../../../services/conf/rules/rules-service/rules-service.service';
import {ContainerRulesService} from '../../../../../services/conf/machine/container/container-rules-service/container-rules.service';
import {Breachscan} from '../../../../../model/breachscan-api';
import RuleAssignmentRequest = Breachscan.RuleAssignmentRequest;

@Component({
  selector: 'app-assign-interaction',
  templateUrl: './assign-interaction.component.html',
  styleUrls: ['./assign-interaction.component.css']
})
export class AssignInteractionComponent implements OnInit {
  machineAddress: string;
  containerId: string;
  interactionRules: RuleInfo[];
  rulesRoute = AppRouting.confInteractions;

  constructor(private route: ActivatedRoute,
              private rulesService: RulesService) {
    this.machineAddress = this.route.snapshot.paramMap.get(AppRouting.machineAddressName);
    this.containerId = this.route.snapshot.paramMap.get(AppRouting.containerIdName);
  }

  ngOnInit() {
    this.getInteractionRules();
  }

  getInteractionRules() {
    this.rulesService.getInteractionRules()
      .subscribe((response) => {
        this.interactionRules = response.map(
          rule => RuleMapper.interactionInfo(rule)
        );
      });
  }

  assignInteractionRule = function (machineAddress: string,
                                    containerId: string,
                                    containerRulesService: ContainerRulesService,
                                    toastService: ToastService,
                                    interactionRuleId: string) {
    const request = new RuleAssignmentRequest();
    request.active = false;
    request.rule = interactionRuleId;

    containerRulesService.assignInteractionRule(
      machineAddress,
      containerId,
      request
    ).subscribe(() => {
      toastService.popToast(ToastType.SUCCESS, 'Assigned interaction rule', interactionRuleId);
    });
  };
}
