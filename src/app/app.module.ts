import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MachinesComponent } from './machines/machines.component';
import { MachineDetailComponent } from './machine-detail/machine-detail.component';
import {MachineService} from './machine.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    MachinesComponent,
    MachineDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ MachineService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
