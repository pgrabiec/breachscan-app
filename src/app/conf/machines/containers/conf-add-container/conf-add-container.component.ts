import {Component, OnInit} from '@angular/core';
import {Breachscan} from '../../../../model/breachscan-api';
import Container = Breachscan.Container;
import {ToastService, ToastType} from '../../../../services/misc/toast/toast.service';
import {ActivatedRoute} from '@angular/router';
import {ContainerService} from '../../../../services/conf/machine/container/container-service/container.service';
import {AppRouting} from '../../../../app-routing';

@Component({
  selector: 'app-conf-add-container',
  templateUrl: './conf-add-container.component.html',
  styleUrls: ['./conf-add-container.component.css']
})
export class ConfAddContainerComponent implements OnInit {
  machineAddress;
  container: Container = new Container();

  constructor(private route: ActivatedRoute,
              private toastService: ToastService,
              private containerService: ContainerService) {
    this.machineAddress = this.route.snapshot.paramMap.get(AppRouting.machineAddressName);
  }

  ngOnInit() {
  }

  saveContainer() {
    console.log(this.container.toString());
    this.containerService.saveContainer(this.machineAddress, this.container)
      .subscribe((response) => this.toastService.popToast(
        ToastType.SUCCESS,
        'Saved container',
        `${this.machineAddress} ${this.container.id}`)
      );
  }
}
