import {Component, OnInit} from '@angular/core';
import {Breachscan} from '../../../../model/breachscan-api';
import {RulesService} from '../../../../services/conf/rules/rules-service/rules-service.service';
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import InteractionRule = Breachscan.InteractionRule;

@Component({
  selector: 'app-add-interaction-rule',
  templateUrl: './add-interaction-rule.component.html',
  styleUrls: ['./add-interaction-rule.component.css']
})
export class AddInteractionRuleComponent implements OnInit {
  execInteractionRule = new InteractionRule();

  constructor(private ruleService: RulesService,
              private toastService: ToastService) {
  }

  ngOnInit() {
  }

  saveExecInteractionRule() {
    this.execInteractionRule.properties = {};
    this.execInteractionRule.type = 'DATA_EXEC';
    this.ruleService.saveInteractionRule(this.execInteractionRule)
      .subscribe((response) => {
        this.toastService.popToast(ToastType.SUCCESS, 'Saved interaction rule', response.id);
      });
  }
}
