import {Component, OnInit} from '@angular/core';
import {MachineService} from '../services/machine-service/machine.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  machineAddresses: string[];

  constructor(private machineService: MachineService) { }

  ngOnInit() {
    this.getMachines();
  }

  getMachines(): void {
    this.machineService.getMachineAddresses()
      .subscribe(machines => this.machineAddresses = machines);
  }
}
