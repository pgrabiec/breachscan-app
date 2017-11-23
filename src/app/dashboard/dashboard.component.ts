import {Component, OnInit} from '@angular/core';
import {MachineService} from '../services/machine-service/machine.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  machineAddresses: string[] = [];

  constructor(private machineService: MachineService) { }

  ngOnInit() {
    this.getMachines();
  }

  getMachines(): void {
    this.machineService.getMachineAddresses()
      .subscribe(machines => this.machineAddresses = machines.slice(0, 4));
  }
}
