import {Component, Input, OnInit} from '@angular/core';
import {RuleInfo} from './rule-info';
import {ContainerRulesService} from '../../../../../services/conf/machine/container/container-rules-service/container-rules.service';
import {ToastService} from '../../../../../services/misc/toast/toast.service';

@Component({
  selector: 'app-assign-rule',
  templateUrl: './assign-rule.component.html',
  styleUrls: ['./assign-rule.component.css']
})
export class AssignRuleComponent implements OnInit {
  @Input() callback: Function;
  @Input() ruleInfos: RuleInfo[];
  @Input() machineAddress: string;
  @Input() containerId: string;
  @Input() ruleTypeName: string;

  constructor(private containerRulesService: ContainerRulesService,
              private toastService: ToastService) {
  }

  ngOnInit() {
  }

  onRuleAssign(ruleId: string) {
    this.callback(
      this.machineAddress,
      this.containerId,
      this.containerRulesService,
      this.toastService,
      ruleId
    );
  }
}
