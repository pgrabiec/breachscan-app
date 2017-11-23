import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MachinesComponent} from './machines/machines.component';
import {MachineDetailComponent} from './machine-detail/machine-detail.component';
import {MachineService} from './services/machine-service/machine.service';
import {MessageService} from './services/message-service/message.service';
import {MessagesComponent} from './messages/messages.component';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MachinesComponent,
    MachineDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MachineService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
