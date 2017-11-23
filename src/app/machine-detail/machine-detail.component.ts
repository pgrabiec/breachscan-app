import {Component, OnInit, Input} from '@angular/core';
import {Machine} from '../machine';
import {ActivatedRoute} from '@angular/router';
import {MachineService} from '../machine.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-machine-detail',
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.css']
})
export class MachineDetailComponent implements OnInit {
  @Input() machine: Machine;

  constructor(private route: ActivatedRoute,
              private machineService: MachineService,
              private location: Location) {

  }

  ngOnInit() {
    this.getMachine();
  }

  getMachine(): void {
    const address = this.route.snapshot.paramMap.get('address');
    this.machineService.getMachine(address)
      .subscribe(machine => this.machine = machine);
  }

  goBack(): void {
    this.location.back();
  }
}
