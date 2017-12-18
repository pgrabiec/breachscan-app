import {Component, OnInit} from '@angular/core';
import {Breachscan} from '../../../../model/breachscan-api';
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import {RulesService} from '../../../../services/conf/rules/rules-service/rules-service.service';
import ExecDetectionRule = Breachscan.ExecDetectionRule;
import FilesystemDetectionRule = Breachscan.FilesystemDetectionRule;
import ProcessesDetectionRule = Breachscan.ProcessesDetectionRule;
import FilesystemChange = Breachscan.FilesystemChange;
import {Constants} from '../../../../model/constants';

@Component({
  selector: 'app-add-detection-rule',
  templateUrl: './add-detection-rule.component.html',
  styleUrls: ['./add-detection-rule.component.css']
})
export class AddDetectionRuleComponent implements OnInit {
  execDetectionRule = new ExecDetectionRule();
  filesystemDetectionRule = new FilesystemDetectionRule();
  processesDetectionRule = new ProcessesDetectionRule();
  filesystemChanges = Constants.filesystemChanges;

  constructor(private ruleService: RulesService,
              private toastService: ToastService) {
    this.execDetectionRule.properties = {
      'exec_name': ''
    };
    this.processesDetectionRule.properties = {
      'command': ''
    };
    this.filesystemDetectionRule.properties = {
      'path': '',
      'change_type': Constants.filesystemChanges[0]
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
        this.toastService.popToast(ToastType.SUCCESS, 'Saved detection rule', response.id);
      });
  }

  saveFilesystemDetectionRule() {
    this.filesystemDetectionRule.type = 'DETECT_FILE_CHANGE';
    this.filesystemDetectionRule.input = 'DATA_FILESYSTEM';
    this.filesystemDetectionRule.output = 'EVENT_FILESYSTEM';

    this.ruleService.saveDetectionRule(this.filesystemDetectionRule)
      .subscribe((response) => {
        this.toastService.popToast(ToastType.SUCCESS, 'Saved detection rule', response.id);
      });
  }

  saveProcessDetectionRule() {
    this.processesDetectionRule.type = 'DETECT_PROCESS';
    this.processesDetectionRule.input = 'DATA_PROCESSES';
    this.processesDetectionRule.output = 'EVENT_PROCESS';

    this.ruleService.saveDetectionRule(this.processesDetectionRule)
      .subscribe((response) => {
        this.toastService.popToast(ToastType.SUCCESS, 'Saved detection rule', response.id);
      });
  }
}
