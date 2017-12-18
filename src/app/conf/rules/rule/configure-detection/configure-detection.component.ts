import {Component, OnInit} from '@angular/core';
import {AppRouting} from '../../../../app-routing';
import {RulesService} from '../../../../services/conf/rules/rules-service/rules-service.service';
import {ActivatedRoute} from '@angular/router';
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import {Breachscan} from '../../../../model/breachscan-api';
import DetectionRule = Breachscan.DetectionRule;
import {Constants} from '../../../../model/constants';

@Component({
  selector: 'app-configure-detection',
  templateUrl: './configure-detection.component.html',
  styleUrls: ['./configure-detection.component.css']
})
export class ConfigureDetectionComponent implements OnInit {
  detectionRule: DetectionRule;
  detectionRuleId: string;
  filesystemChanges = Constants.filesystemChanges;

  constructor(private route: ActivatedRoute,
              private rulesService: RulesService,
              private toastService: ToastService) {
    this.detectionRuleId = this.route.snapshot.paramMap.get(AppRouting.detectionRuleIdName);
  }

  ngOnInit() {
    this.getDetectionRule();
  }

  getDetectionRule() {
    this.rulesService.getDetectionRule(this.detectionRuleId)
      .subscribe((response) => {
        this.detectionRule = response;
      });
  }

  updateDetectionRule() {
    this.rulesService.updateDetectionRule(this.detectionRule)
      .subscribe((response) => {
      this.getDetectionRule();
        this.toastService.popToast(ToastType.SUCCESS, 'Updated detection rule', this.detectionRule.name);
      });
  }
}
