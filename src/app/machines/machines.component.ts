import { Component, OnInit } from '@angular/core';
import {Machine} from '../machine';
import { MachineService } from '../machine.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  machines: Machine[];
  selectedMachine: Machine;

  constructor(private machineService: MachineService) { }

  ngOnInit() {
    this.getMachines();
  }

  onSelect(machine: Machine) {
    this.selectedMachine = machine;
  }

  getMachines(): void {
    this.machineService.getMachines()
      .subscribe(machines => this.machines = machines);
  }
}
