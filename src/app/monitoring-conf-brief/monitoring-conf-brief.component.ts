import {Component, Input, OnInit} from '@angular/core';
import {MonitoringConfiguration} from '../model/monitoring/monitoring-configuration';

@Component({
  selector: 'app-monitoring-conf-brief',
  templateUrl: './monitoring-conf-brief.component.html',
  styleUrls: ['./monitoring-conf-brief.component.css']
})
export class MonitoringConfBriefComponent implements OnInit {
  @Input() monitoringConf: MonitoringConfiguration;

  constructor() { }

  ngOnInit() {
  }

}
