import { Component, OnInit } from '@angular/core';
import {Machine} from '../machine';
import { MACHINES } from '../mock-machines';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  machine: Machine = {
    address: '192.168.0.1',
    monitored: false,
    name: 'zk'
  };

  machines: Machine[] = MACHINES;

  selectedMachine: Machine;

  constructor() { }

  ngOnInit() {
  }

  onSelect(machine: Machine) {
    this.selectedMachine = machine;
  }
}
