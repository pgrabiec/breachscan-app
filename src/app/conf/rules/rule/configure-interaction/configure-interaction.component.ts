import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RulesService} from '../../../../services/conf/rules/rules-service/rules-service.service';
import {AppRouting} from '../../../../app-routing';
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import {Breachscan} from '../../../../model/breachscan-api';
import InteractionRule = Breachscan.InteractionRule;

@Component({
  selector: 'app-configure-interaction',
  templateUrl: './configure-interaction.component.html',
  styleUrls: ['./configure-interaction.component.css']
})
export class ConfigureInteractionComponent implements OnInit {
  interactionRule: InteractionRule;
  interactionRuleId: string;

  constructor(private route: ActivatedRoute,
              private rulesService: RulesService,
              private toastService: ToastService) {
    this.interactionRuleId = this.route.snapshot.paramMap.get(AppRouting.interactionRuleIdName);
  }

  ngOnInit() {
    this.getInteractionRule();
  }

  getInteractionRule() {
    this.rulesService.getInteractionRule(this.interactionRuleId)
      .subscribe((response) => {
        this.interactionRule = response;
      });
  }

  updateInteractionRule() {
    this.rulesService.updateInteractionRule(this.interactionRule)
      .subscribe(() => {
        this.getInteractionRule();
        this.toastService.popToast(ToastType.SUCCESS, 'Updated interaction rule', this.interactionRule.name);
      });
  }
}
