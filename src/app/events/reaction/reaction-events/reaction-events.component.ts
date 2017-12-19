import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../services/events/event-service/event.service';
import {Breachscan} from '../../../model/breachscan-api';
import {ToastService, ToastType} from '../../../services/misc/toast/toast.service';
import {WebSocketReactionService} from '../../../services/websocket/reaction/websocket-reaction.service';
import ReactionEventInfo = Breachscan.ReactionEventInfo;

@Component({
  selector: 'app-reaction-events',
  templateUrl: './reaction-events.component.html',
  styleUrls: ['./reaction-events.component.css']
})
export class ReactionEventsComponent implements OnInit {
  events: ReactionEventInfo[];

  constructor(private eventService: EventService,
              private websocketReaction: WebSocketReactionService,
              private toastService: ToastService) {
  }

  ngOnInit() {
    this.websocketReaction.messages
      .subscribe(((msg) => {
        this.getEvents();
        this.toastService.popToast(ToastType.INFO, msg.data, '');
      }));
    this.getEvents();
  }

  getEvents() {
    this.eventService.getReactionEvents()
      .subscribe((data) => {
        this.events = data;
      });
  }
}
