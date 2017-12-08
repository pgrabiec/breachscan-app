import {Component, OnInit} from '@angular/core';
import {MachineService} from '../../../services/conf/machine/machine-service/machine.service';
import {AppRouting} from '../../../app-routing';
import {ToastService, ToastType} from '../../../services/misc/toast/toast.service';
import {Breachscan} from '../../../model/breachscan-api';
import MachineId = Breachscan.MachineId;

@Component({
  selector: 'app-machines-configuration',
  templateUrl: './machines.configuration.component.html',
  styleUrls: ['./machines.configuration.component.css']
})
export class MachinesConfigurationComponent implements OnInit {
  machineIds: MachineId[];
  machinesRoute = AppRouting.confMachines;
  addMachineRoute = AppRouting.confAddMachine;

  constructor(private machineService: MachineService,
              private toastService: ToastService) {
  }

  ngOnInit() {
    this.getMachines();
  }

  getMachines(): void {
    this.machineService.getMachineIds()
      .subscribe(machineIds => {
        this.machineIds = machineIds;
      });
  }

  deleteMachine(machineAddress: string) {
    this.machineService.deleteMachine(machineAddress)
      .subscribe((response) => {
        this.getMachines();
        if (response != null) {
          this.toastService.popToast(ToastType.INFO, 'Deleted machine ', machineAddress);
        }
      });
  }
}
