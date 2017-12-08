import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MachinesConfigurationComponent} from './conf/machines/machines-configuration/machines.configuration.component';
import {MachineService} from './services/conf/machine/machine-service/machine.service';
import {MessageService} from './services/misc/message-service/message.service';
import {AppRoutingModule} from './/app-routing.module';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ContainerService} from './services/conf/machine/container/container-service/container.service';
import {ErrorHandlerService} from './services/misc/error-handler/error-handler.service';
import {IdComponent} from './id/id.component';
import {MachineConfigurationComponent} from './conf/machines/machine-configuration/machine-configuration.component';
import {ToasterConfig, ToasterModule} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastService} from './services/misc/toast/toast.service';
import { ConfAddMachineComponent } from './conf/machines/conf-add-machine/conf-add-machine.component';
import {UrlInterceptor} from './services/misc/http-service/url-interceptor.service';
import { ConfAddContainerComponent } from './conf/machines/containers/conf-add-container/conf-add-container.component';
import { ContainerConfigurationComponent } from './conf/machines/containers/container-configuration/container-configuration.component';
import { AssignRuleComponent } from './conf/machines/containers/rules/assign-rule/assign-rule.component';
import { AssignInteractionComponent } from './conf/machines/containers/rules/assign-interaction/assign-interaction.component';
import { AssignDetectionComponent } from './conf/machines/containers/rules/assign-detection/assign-detection.component';
import { AssignReactionComponent } from './conf/machines/containers/rules/assign-reaction/assign-reaction.component';
import {ContainerRulesService} from './services/conf/machine/container/container-rules-service/container-rules.service';
import { ShowRulesComponent } from './conf/rules/show-all-rules/show-all-rules.component';
import {RulesService} from './services/conf/rules/rules-service/rules-service.service';
import { ShowRuleComponent } from './conf/rules/show-rules/show-rules.component';


@NgModule({
  declarations: [
    AppComponent,
    MachinesConfigurationComponent,
    HomeComponent,
    IdComponent,
    MachineConfigurationComponent,
    ConfAddMachineComponent,
    ConfAddContainerComponent,
    ContainerConfigurationComponent,
    AssignRuleComponent,
    AssignInteractionComponent,
    AssignDetectionComponent,
    AssignReactionComponent,
    ShowRulesComponent,
    ShowRuleComponent
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true,
    },
    MachineService,
    MessageService,
    ContainerService,
    ErrorHandlerService,
    ToastService,
    ContainerRulesService,
    RulesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  public toastConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right'
  });
}
