import {Component} from '@angular/core';
import {AppRouting} from './app-routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Breach Scan';

  homeRoute = AppRouting.home;
  machinesRoute = AppRouting.confMachines;
}
