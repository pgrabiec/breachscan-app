import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import Machine = Breachscan.Machine;
import {AppRouting} from '../app-routing';
import {MachineService} from '../services/machine-service/machine.service';

@Component({
  selector: 'app-machine-configuration',
  templateUrl: './machine-configuration.component.html',
  styleUrls: ['./machine-configuration.component.css']
})
export class MachineConfigurationComponent implements OnInit {
  machine: Machine;

  constructor(private route: ActivatedRoute,
              private machineService: MachineService) {
  }

  ngOnInit() {
    this.getMachine();
  }

  getMachine() {
    const machineAddress = this.route.snapshot.paramMap.get(AppRouting.machineAddressName);

    this.machineService.getMachine(machineAddress)
      .subscribe((machine) => this.machine = machine);
  }

}
