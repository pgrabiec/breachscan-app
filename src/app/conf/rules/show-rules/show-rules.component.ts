import {Component, Input, OnInit} from '@angular/core';
import {RuleInfo} from '../../machines/containers/rules/assign-rule/rule-info';

@Component({
  selector: 'app-show-rules',
  templateUrl: './show-rules.component.html',
  styleUrls: ['./show-rules.component.css']
})
export class ShowRuleComponent implements OnInit {
  @Input() onDelete: Function;
  @Input() ruleInfos: RuleInfo[];
  @Input() showRuleRoute: string;

  constructor() { }

  ngOnInit() {
  }

}
