import {Component, OnInit} from '@angular/core';
import {MachineService} from '../services/machine-service/machine.service';
import MachineId = Breachscan.MachineId;
import {AppRouting} from '../app-routing';

@Component({
  selector: 'app-machines-configuration',
  templateUrl: './machines.configuration.component.html',
  styleUrls: ['./machines.configuration.component.css']
})
export class MachinesConfigurationComponent implements OnInit {
  machineIds: MachineId[];
  machinesRoute = AppRouting.confMachines;

  constructor(private machineService: MachineService) { }

  ngOnInit() {
    this.getMachines();
  }

  getMachines(): void {
    this.machineService.getMachineIds()
      .subscribe(machineIds => this.machineIds = machineIds);
  }
}
