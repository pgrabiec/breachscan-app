import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../services/events/event-service/event.service';
import {Breachscan} from '../../../model/breachscan-api';
import DetectionEventInfo = Breachscan.DetectionEventInfo;

@Component({
  selector: 'app-detection-events',
  templateUrl: './detection-events.component.html',
  styleUrls: ['./detection-events.component.css']
})
export class DetectionEventsComponent implements OnInit {
  events: DetectionEventInfo[];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getDetectionEvents()
      .subscribe((data) => {
        this.events = data;
      });
  }
}
