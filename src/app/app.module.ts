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
import {ContainerService} from './services/container-service/container.service';
import {ErrorHandlerService} from './services/error-handler/error-handler.service';
import {IdComponent} from './id/id.component';
import {MachineConfigurationComponent} from './machine-configuration/machine-configuration.component';
import {ToasterConfig, ToasterModule} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastService} from './services/toast/toast.service';
import { ConfAddMachineComponent } from './conf-add-machine/conf-add-machine.component';


@NgModule({
  declarations: [
    AppComponent,
    MachinesConfigurationComponent,
    HomeComponent,
    IdComponent,
    MachineConfigurationComponent,
    ConfAddMachineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToasterModule,
    BrowserAnimationsModule
  ],
  providers: [
    MachineService,
    MessageService,
    ContainerService,
    ErrorHandlerService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  public toastConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right'
  });
}
