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
import {ContainerDetailComponent} from './container-detail/container-detail.component';
import { ContainerService } from './services/container-service/container.service';
import { MonitoringService } from './services/monitoring-service/monitoring.service';
import { ErrorHandlerService } from './services/error-handler/error-handler.service';
import { MonitoringConfBriefComponent } from './monitoring-conf-brief/monitoring-conf-brief.component';


@NgModule({
  declarations: [
    AppComponent,
    MachinesComponent,
    MachineDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ContainerDetailComponent,
    MonitoringConfBriefComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MachineService, MessageService, ContainerService, MonitoringService, ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
