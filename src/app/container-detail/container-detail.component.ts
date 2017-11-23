import { Component, OnInit } from '@angular/core';
import {Container} from '../model/machine/container/container';
import {ActivatedRoute} from '@angular/router';
import {ContainerService} from '../services/container-service/container.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-container-detail',
  templateUrl: './container-detail.component.html',
  styleUrls: ['./container-detail.component.css']
})
export class ContainerDetailComponent implements OnInit {
  container: Container;

  constructor(private route: ActivatedRoute,
              private containerService: ContainerService,
              private location: Location) {

  }

  ngOnInit() {
    this.getContainer();
  }

  getContainer(): void {
    const machineAddress = this.route.snapshot.paramMap.get('address');
    const containerId = this.route.snapshot.paramMap.get('containerId');

    this.containerService.getContainer(machineAddress, containerId)
      .subscribe(container => {
        this.container = container;
        console.log(this.container);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
