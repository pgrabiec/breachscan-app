import {Component, OnInit} from '@angular/core';
import {Breachscan} from '../../../model/breachscan-api';
import {EventService} from '../../../services/events/event-service/event.service';
import InteractionDataInfo = Breachscan.InteractionDataInfo;

@Component({
  selector: 'app-interaction-events',
  templateUrl: './interaction-events.component.html',
  styleUrls: ['./interaction-events.component.css']
})
export class InteractionEventsComponent implements OnInit {
  events: InteractionDataInfo[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getInteractionData()
      .subscribe((data) => {
        this.events = data;
      });
  }
}
