import { Component, OnInit } from '@angular/core';
import {AppRouting} from '../app-routing';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  interactionEventsRoute = AppRouting.interactionEvents;
  detectionEventsRoute = AppRouting.detectionEvents;
  reactionEventsRoute = AppRouting.reactionEvents;

  constructor() { }

  ngOnInit() {
  }

}
