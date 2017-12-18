import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../services/events/event-service/event.service';
import {Breachscan} from '../../../model/breachscan-api';
import {ToastService, ToastType} from '../../../services/misc/toast/toast.service';
import DetectionEventInfo = Breachscan.DetectionEventInfo;
import {WebsocketDetectionService} from '../../../services/websocket/detection/websocket-detection.service';

@Component({
  selector: 'app-detection-events',
  templateUrl: './detection-events.component.html',
  styleUrls: ['./detection-events.component.css']
})
export class DetectionEventsComponent implements OnInit {
  events: DetectionEventInfo[];

  constructor(private eventService: EventService,
              private websocketDetection: WebsocketDetectionService,
              private toastService: ToastService) {
  }

  ngOnInit() {
    this.websocketDetection.messages
      .subscribe(((msg) => {
        this.getEvents();
        this.toastService.popToast(ToastType.INFO, msg.data, '');
      }));
    this.getEvents();
  }

  getEvents() {
    this.eventService.getDetectionEvents()
      .subscribe((data) => {
        this.events = data;
      });
  }
}
