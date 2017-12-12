import {Component, OnInit} from '@angular/core';
import {Breachscan} from '../../../../../model/breachscan-api';
import {ToastService, ToastType} from '../../../../../services/misc/toast/toast.service';
import {ContainerRulesService} from '../../../../../services/conf/machine/container/container-rules-service/container-rules.service';
import {RuleMapper} from '../assign-rule/RuleMapper';
import {RuleInfo} from '../assign-rule/rule-info';
import {ActivatedRoute} from '@angular/router';
import {RulesService} from '../../../../../services/conf/rules/rules-service/rules-service.service';
import {AppRouting} from '../../../../../app-routing';
import RuleAssignmentRequest = Breachscan.RuleAssignmentRequest;

@Component({
  selector: 'app-assign-reaction',
  templateUrl: './assign-reaction.component.html',
  styleUrls: ['./assign-reaction.component.css']
})
export class AssignReactionComponent implements OnInit {
  machineAddress: string;
  containerId: string;
  reactionRules: RuleInfo[];
  rulesRoute = AppRouting.confReactions;

  constructor(private route: ActivatedRoute,
              private rulesService: RulesService) {
    this.machineAddress = this.route.snapshot.paramMap.get(AppRouting.machineAddressName);
    this.containerId = this.route.snapshot.paramMap.get(AppRouting.containerIdName);
  }

  ngOnInit() {
    this.getReactionRules();
  }

  getReactionRules() {
    this.rulesService.getReactionRules()
      .subscribe((response) => {
        this.reactionRules = response.map(
          rule => RuleMapper.reactionInfo(rule)
        );
      });
  }

  assignReactionRule = function (machineAddress: string,
                                 containerId: string,
                                 containerRulesService: ContainerRulesService,
                                 toastService: ToastService,
                                 reactionRuleId: string) {
    const request = new RuleAssignmentRequest();
    request.active = false;
    request.rule = reactionRuleId;

    containerRulesService.assignReactionRule(
      machineAddress,
      containerId,
      request
    ).subscribe((response) => {
      toastService.popToast(ToastType.SUCCESS, 'Assigned reaction rule', reactionRuleId);
    });
  };
}
