import {Component, OnInit} from '@angular/core';
import {Machine} from '../model/machine/machine';
import {ActivatedRoute} from '@angular/router';
import {MachineService} from '../services/machine-service/machine.service';
import {Location} from '@angular/common';
import {Container} from '../model/machine/container/container';
import {MonitoringService} from '../services/monitoring-service/monitoring.service';

@Component({
  selector: 'app-machine-detail',
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.css']
})
export class MachineDetailComponent implements OnInit {
  machine: Machine;
  containers: Container[];

  constructor(private route: ActivatedRoute,
              private machineService: MachineService,
              private location: Location,
              private monitoringService: MonitoringService) {

  }

  ngOnInit() {
    this.getMachine();
  }

  getMachine(): void {
    const address = this.route.snapshot.paramMap.get('address');
    this.machineService.getMachine(address)
      .subscribe(machine => {
        this.machine = machine;
        this.containers = Array.from(new Map(Object.entries(machine.containers)).values());
        console.log(this.machine);
        console.log(this.containers);
      });
  }

  goBack(): void {
    this.location.back();
  }

  stopMonitoring(): void {
    this.monitoringService.updateMonitoring(this.machine, false)
      .subscribe((_) => this.getMachine());
  }

  startMonitoring() {
    this.monitoringService.updateMonitoring(this.machine, true)
      .subscribe((_) => this.getMachine());
  }
}
