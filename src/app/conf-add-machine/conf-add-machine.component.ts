import {Component, OnInit} from '@angular/core';
import {MachineService} from '../services/machine-service/machine.service';
import {ActivatedRoute} from '@angular/router';
import {Breachscan} from '../model/breachscan-api';
import Machine = Breachscan.Machine;
import {ToastService, ToastType} from '../services/toast/toast.service';
import {isSuccess} from '@angular/http/src/http_utils';

@Component({
  selector: 'app-conf-add-machine',
  templateUrl: './conf-add-machine.component.html',
  styleUrls: ['./conf-add-machine.component.css']
})
export class ConfAddMachineComponent implements OnInit {

  constructor(private machineService: MachineService,
              private toastService: ToastService) {
  }

  ngOnInit() {
  }

  saveMachine(address: string, name: string, description: string) {
    const machine = new Machine();
    machine.address = address;
    machine.name = name;
    machine.description = description;
    machine.containers = {};

    this.machineService.saveMachine(machine)
      .subscribe((response) => {
        this.toastService.popToast(ToastType.SUCCESS, 'Machine saved', address);
      });
  }
}
