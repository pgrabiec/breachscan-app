import {Component, OnInit} from '@angular/core';
import {AppRouting} from '../../app-routing';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  homeRoute = AppRouting.home;
  machinesRoute = AppRouting.confMachines;
  rulesRoute = AppRouting.confRules;
  stateRoute = AppRouting.state;
  eventsRoute = AppRouting.events;

  constructor() {
  }

  ngOnInit() {
  }

}
