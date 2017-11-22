import { Component, OnInit, Input } from '@angular/core';
import { Machine } from '../machine';

@Component({
  selector: 'app-machine-detail',
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.css']
})
export class MachineDetailComponent implements OnInit {
  @Input() machine: Machine;

  constructor() { }

  ngOnInit() {
  }

}
