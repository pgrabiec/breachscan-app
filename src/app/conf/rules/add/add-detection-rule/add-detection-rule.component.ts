import { Component, OnInit } from '@angular/core';
import {Breachscan} from '../../../../model/breachscan-api';
import ExecDetectionRule = Breachscan.ExecDetectionRule;
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import {RulesService} from '../../../../services/conf/rules/rules-service/rules-service.service';

@Component({
  selector: 'app-add-detection-rule',
  templateUrl: './add-detection-rule.component.html',
  styleUrls: ['./add-detection-rule.component.css']
})
export class AddDetectionRuleComponent implements OnInit {
  execDetectionRule = new ExecDetectionRule();

  constructor(private ruleService: RulesService,
              private toastService: ToastService) {
    this.execDetectionRule.properties = {
      'exec_name': ''
    };
  }

  ngOnInit() {
  }

  saveExecDetectionRule() {
    this.execDetectionRule.type = 'DETECT_EXEC_NAME';
    this.execDetectionRule.input = 'DATA_EXEC';
    this.execDetectionRule.output = 'EVENT_EXEC';

    this.ruleService.saveDetectionRule(this.execDetectionRule)
      .subscribe((response) => {
        this.toastService.popToast(ToastType.SUCCESS, 'Saved interaction rule', response.id);
      });
  }
}
