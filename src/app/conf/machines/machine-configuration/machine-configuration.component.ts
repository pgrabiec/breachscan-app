import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppRouting} from '../../../app-routing';
import {MachineService} from '../../../services/conf/machine/machine-service/machine.service';
import {Breachscan} from '../../../model/breachscan-api';
import Machine = Breachscan.Machine;
import {ToastService, ToastType} from '../../../services/misc/toast/toast.service';
import Container = Breachscan.Container;
import {ContainerService} from '../../../services/conf/machine/container/container-service/container.service';

@Component({
  selector: 'app-machine-configuration',
  templateUrl: './machine-configuration.component.html',
  styleUrls: ['./machine-configuration.component.css']
})
export class MachineConfigurationComponent implements OnInit {
  machine: Machine;
  containers: Container[];
  containersRoute;
  addContainerRoute;

  constructor(private route: ActivatedRoute,
              private machineService: MachineService,
              private toastService: ToastService,
              private containerService: ContainerService) {
  }

  ngOnInit() {
    this.getMachine();
  }

  getMachine() {
    const machineAddress = this.route.snapshot.paramMap.get(AppRouting.machineAddressName);

    this.machineService.getMachine(machineAddress)
      .subscribe((machine) => {
        this.machine = machine;
        this.containers = Object.values<Container>(machine.containers);
        this.containersRoute = AppRouting.replaceMachineAddress(
          AppRouting.confContainers,
          machine.address
        );
        this.addContainerRoute = AppRouting.replaceMachineAddress(
          AppRouting.confAddContainer,
          machine.address
        );
      });
  }

  updateMachine() {
    this.machineService.updateMachine(this.machine)
      .subscribe(() => {
        this.getMachine();
        this.toastService.popToast(ToastType.SUCCESS, 'Updated machine', this.machine.address);
      });
  }

  resetMachine() {
    this.getMachine();
  }

  deleteContainer(machineAddress: string, containerId: string) {
    this.containerService.deleteContainer(machineAddress, containerId)
      .subscribe(() => {
          this.getMachine();
          this.toastService.popToast(
            ToastType.SUCCESS,
            'Deleted container',
            `${machineAddress} ${containerId}`
          );
        }
      );
  }
}
