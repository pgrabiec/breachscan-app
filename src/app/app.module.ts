import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MachinesConfigurationComponent} from './machines-configuration/machines.configuration.component';
import {MachineService} from './services/machine-service/machine.service';
import {MessageService} from './services/message-service/message.service';
import {AppRoutingModule} from './/app-routing.module';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ContainerService } from './services/container-service/container.service';
import { ErrorHandlerService } from './services/error-handler/error-handler.service';
import { IdComponent } from './id/id.component';
import { MachineConfigurationComponent } from './machine-configuration/machine-configuration.component';


@NgModule({
  declarations: [
    AppComponent,
    MachinesConfigurationComponent,
    HomeComponent,
    IdComponent,
    MachineConfigurationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MachineService, MessageService, ContainerService, ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
