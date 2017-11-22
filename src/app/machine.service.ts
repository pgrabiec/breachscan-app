import { Injectable } from '@angular/core';
import { Machine } from './machine';
import { MACHINES } from './mock-machines';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class MachineService {

  constructor(private messageService: MessageService) { }

  getMachines(): Observable<Machine[]> {
    // Todo: send the message _after_ fetching the machines
    this.messageService.add('MachineService: fetched machines');
    return of(MACHINES);
  }
}
