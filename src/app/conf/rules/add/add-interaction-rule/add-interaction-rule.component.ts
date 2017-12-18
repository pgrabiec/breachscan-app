import {Component, OnInit} from '@angular/core';
import {Breachscan} from '../../../../model/breachscan-api';
import {RulesService} from '../../../../services/conf/rules/rules-service/rules-service.service';
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import InteractionRule = Breachscan.InteractionRule;
import FilesystemInteractionRule = Breachscan.FilesystemInteractionRule;
import ProcessesInteractionRule = Breachscan.ProcessesInteractionRule;

@Component({
  selector: 'app-add-interaction-rule',
  templateUrl: './add-interaction-rule.component.html',
  styleUrls: ['./add-interaction-rule.component.css']
})
export class AddInteractionRuleComponent implements OnInit {
  execInteractionRule = new InteractionRule();
  filesystemInteractionRule = new FilesystemInteractionRule();
  processesInteractionRule = new ProcessesInteractionRule();

  constructor(private ruleService: RulesService,
              private toastService: ToastService) {
    this.filesystemInteractionRule.properties = {
      'poll_interval': '1000'
    };
    this.processesInteractionRule.properties = {
      'poll_interval': '1000'
    };
  }

  ngOnInit() {
  }

  saveExecInteractionRule() {
    this.execInteractionRule.properties = {};
    this.execInteractionRule.type = 'DATA_EXEC';
    this.ruleService.saveInteractionRule(this.execInteractionRule)
      .subscribe((response) => {
        this.toastService.popToast(ToastType.SUCCESS, 'Saved exec rule', response.id);
      });
  }

  saveFilesystemRule() {
    this.filesystemInteractionRule.type = 'DATA_FILESYSTEM';
    this.ruleService.saveInteractionRule(this.filesystemInteractionRule)
      .subscribe((response) => {
        this.toastService.popToast(ToastType.SUCCESS, 'Saved filesystem rule', response.id);
      });
  }

  saveProcessesRule() {
    this.processesInteractionRule.type = 'DATA_PROCESSES';
    this.ruleService.saveInteractionRule(this.processesInteractionRule)
      .subscribe((response) => {
        this.toastService.popToast(ToastType.SUCCESS, 'Saved processes rule', response.id);
      });
  }
}
