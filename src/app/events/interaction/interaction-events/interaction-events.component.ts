import {Component, OnInit} from '@angular/core';
import {Breachscan} from '../../../model/breachscan-api';
import {EventService} from '../../../services/events/event-service/event.service';
import {WebsocketInteractionService} from '../../../services/websocket/interaction/websocker-interaction.service';
import {ToastService, ToastType} from '../../../services/misc/toast/toast.service';
import InteractionDataInfo = Breachscan.InteractionDataInfo;

@Component({
  selector: 'app-interaction-events',
  templateUrl: './interaction-events.component.html',
  styleUrls: ['./interaction-events.component.css']
})
export class InteractionEventsComponent implements OnInit {
  events: InteractionDataInfo[];

  constructor(private eventService: EventService,
              private websocketInteraction: WebsocketInteractionService,
              private toastService: ToastService) {
  }

  ngOnInit() {
    this.getEvents();
    this.websocketInteraction.messages
      .subscribe((() => {
        this.getEvents();
        this.toastService.popToast(ToastType.INFO, 'New interaction data', '');
      }));
  }

  getEvents() {
    this.eventService.getInteractionData()
      .subscribe((data) => {
        this.events = data;
      });
  }
}
