import {Component, OnInit} from '@angular/core';
import Machine = Breachscan.Machine;
import {Breachscan} from '../../../model/breachscan-api';
import {MachineService} from '../../../services/conf/machine/machine-service/machine.service';
import {ToastService, ToastType} from '../../../services/misc/toast/toast.service';

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
