import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/events/event-service/event.service';
import {Breachscan} from '../../../model/breachscan-api';
import ReactionEventInfo = Breachscan.ReactionEventInfo;

@Component({
  selector: 'app-reaction-events',
  templateUrl: './reaction-events.component.html',
  styleUrls: ['./reaction-events.component.css']
})
export class ReactionEventsComponent implements OnInit {
  events: ReactionEventInfo[];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getReactionEvents()
      .subscribe((data) => {
        this.events = data;
      });
  }
}
