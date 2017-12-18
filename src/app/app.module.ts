import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MachinesConfigurationComponent} from './conf/machines/machines-configuration/machines.configuration.component';
import {MachineService} from './services/conf/machine/machine-service/machine.service';
import {AppRoutingModule} from './/app-routing.module';
import {HomeComponent} from './misc/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ContainerService} from './services/conf/machine/container/container-service/container.service';
import {ErrorHandlerService} from './services/misc/error-handler/error-handler.service';
import {MachineConfigurationComponent} from './conf/machines/machine-configuration/machine-configuration.component';
import {ToasterConfig, ToasterModule} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastService} from './services/misc/toast/toast.service';
import {ConfAddMachineComponent} from './conf/machines/conf-add-machine/conf-add-machine.component';
import {UrlInterceptor} from './services/misc/http-service/url-interceptor.service';
import {ConfAddContainerComponent} from './conf/machines/containers/conf-add-container/conf-add-container.component';
import {ContainerConfigurationComponent} from './conf/machines/containers/container-configuration/container-configuration.component';
import {AssignRuleComponent} from './conf/machines/containers/rules/assign-rule/assign-rule.component';
import {AssignInteractionComponent} from './conf/machines/containers/rules/assign-interaction/assign-interaction.component';
import {AssignDetectionComponent} from './conf/machines/containers/rules/assign-detection/assign-detection.component';
import {AssignReactionComponent} from './conf/machines/containers/rules/assign-reaction/assign-reaction.component';
import {ContainerRulesService} from './services/conf/machine/container/container-rules-service/container-rules.service';
import {ShowRulesComponent} from './conf/rules/show-all-rules/show-all-rules.component';
import {RulesService} from './services/conf/rules/rules-service/rules-service.service';
import {ConfigureInteractionComponent} from './conf/rules/rule/configure-interaction/configure-interaction.component';
import {ConfigureDetectionComponent} from './conf/rules/rule/configure-detection/configure-detection.component';
import {ConfigureReactionComponent} from './conf/rules/rule/configure-reaction/configure-reaction.component';
import {AddInteractionRuleComponent} from './conf/rules/add/add-interaction-rule/add-interaction-rule.component';
import {AddDetectionRuleComponent} from './conf/rules/add/add-detection-rule/add-detection-rule.component';
import {AddReactionRuleComponent} from './conf/rules/add/add-reaction-rule/add-reaction-rule.component';
import {ShowStateComponent} from './state/show-state/show-state.component';
import {StateService} from './services/state/state.service';
import {NavigationComponent} from './misc/navigation/navigation.component';
import {RuleStateFilter} from './filters/TextFilter';
import {EventService} from './services/events/event-service/event.service';
import {EventsComponent} from './events/events.component';
import {InteractionEventsComponent} from './events/interaction/interaction-events/interaction-events.component';
import {DetectionEventsComponent} from './events/detection/detection-events/detection-events.component';
import {ReactionEventsComponent} from './events/reaction/reaction-events/reaction-events.component';
import {WebsocketService} from './services/websocket/websocket.service';
import {WebsocketInteractionService} from './services/websocket/interaction/websocker-interaction.service';
import {WebsocketDetectionService} from './services/websocket/detection/websocket-detection.service';
import {WebsocketReactionService} from './services/websocket/reaction/websocket-reaction.service';
import {WebsocketMonitoringService} from './services/websocket/monitoring/websocket-monitoring.service';

@NgModule({
  declarations: [
    AppComponent,
    MachinesConfigurationComponent,
    HomeComponent,
    MachineConfigurationComponent,
    ConfAddMachineComponent,
    ConfAddContainerComponent,
    ContainerConfigurationComponent,
    AssignRuleComponent,
    AssignInteractionComponent,
    AssignDetectionComponent,
    AssignReactionComponent,
    ShowRulesComponent,
    ConfigureInteractionComponent,
    ConfigureDetectionComponent,
    ConfigureReactionComponent,
    AddInteractionRuleComponent,
    AddDetectionRuleComponent,
    AddReactionRuleComponent,
    ShowStateComponent,
    NavigationComponent,
    RuleStateFilter,
    EventsComponent,
    InteractionEventsComponent,
    DetectionEventsComponent,
    ReactionEventsComponent
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
    ContainerService,
    ErrorHandlerService,
    ToastService,
    ContainerRulesService,
    RulesService,
    StateService,
    EventService,
    WebsocketService,
    WebsocketInteractionService,
    WebsocketDetectionService,
    WebsocketReactionService,
    WebsocketMonitoringService
  ],
  bootstrap: [AppComponent],
  exports: [
    RuleStateFilter
  ]
})
export class AppModule {
  public toastConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right'
  });
}
