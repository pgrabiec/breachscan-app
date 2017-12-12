import {Component, Input, OnInit} from '@angular/core';
import {RuleDetails} from './RuleDetails';
import {ToastService} from '../../../../services/misc/toast/toast.service';
import {RulesService} from '../../../../services/conf/rules/rules-service/rules-service.service';

@Component({
  selector: 'app-configure-rule',
  templateUrl: './configure-rule.component.html',
  styleUrls: ['./configure-rule.component.css']
})
export class ConfigureRuleComponent implements OnInit {
  @Input() rule: RuleDetails;
  @Input() updateCallback: Function;
  @Input() resetCallback: Function;
  @Input() CapitalRuleType: string;
  @Input() propertyNames: string[];

  constructor(private rulesService: RulesService,
              private toastService: ToastService) {
  }

  ngOnInit() {
    this.resetPropertyNames();
  }

  updateRule() {
    this.updateCallback(this.rulesService,
      this.toastService,
      this.rule
    );
  }

  resetRule() {
    this.resetCallback(this.rulesService, this.rule.id)
      .subscribe((rule) => {
        this.rule = rule;
        this.resetPropertyNames();
      });
  }

  resetPropertyNames() {
    if (this.rule != null) {
      this.propertyNames = Object.keys(this.rule.properties);
    }
  }
}
