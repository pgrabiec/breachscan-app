import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachinesConfigurationComponent} from './conf/machines/machines-configuration/machines.configuration.component';
import {AppRouting} from './app-routing';
import {HomeComponent} from './misc/home/home.component';
import {MachineConfigurationComponent} from './conf/machines/machine-configuration/machine-configuration.component';
import {ConfAddMachineComponent} from './conf/machines/conf-add-machine/conf-add-machine.component';
import {ConfAddContainerComponent} from './conf/machines/containers/conf-add-container/conf-add-container.component';
import {ContainerConfigurationComponent} from './conf/machines/containers/container-configuration/container-configuration.component';
import {AssignInteractionComponent} from './conf/machines/containers/rules/assign-interaction/assign-interaction.component';
import {AssignDetectionComponent} from './conf/machines/containers/rules/assign-detection/assign-detection.component';
import {AssignReactionComponent} from './conf/machines/containers/rules/assign-reaction/assign-reaction.component';
import {ShowRulesComponent} from './conf/rules/show-all-rules/show-all-rules.component';
import {ConfigureInteractionComponent} from './conf/rules/rule/configure-interaction/configure-interaction.component';
import {ConfigureDetectionComponent} from './conf/rules/rule/configure-detection/configure-detection.component';
import {ConfigureReactionComponent} from './conf/rules/rule/configure-reaction/configure-reaction.component';
import {AddInteractionRuleComponent} from './conf/rules/add/add-interaction-rule/add-interaction-rule.component';
import {AddDetectionRuleComponent} from './conf/rules/add/add-detection-rule/add-detection-rule.component';
import {AddReactionRuleComponent} from './conf/rules/add/add-reaction-rule/add-reaction-rule.component';
import {ShowStateComponent} from './state/show-state/show-state.component';
import {EventsComponent} from './events/events.component';
import {InteractionEventsComponent} from './events/interaction/interaction-events/interaction-events.component';
import {DetectionEventsComponent} from './events/detection/detection-events/detection-events.component';
import {ReactionEventsComponent} from './events/reaction/reaction-events/reaction-events.component';

const routes: Routes = [
  { path: '', redirectTo: AppRouting.home, pathMatch: 'full' },
  { path: AppRouting.home, component: HomeComponent},
  { path: AppRouting.confMachines, component: MachinesConfigurationComponent},
  { path: AppRouting.confAddMachine, component: ConfAddMachineComponent, pathMatch: 'full' },
  { path: AppRouting.confMachineAddress, component: MachineConfigurationComponent},
  { path: AppRouting.confAddContainer, component: ConfAddContainerComponent },
  { path: AppRouting.confContainerId, component: ContainerConfigurationComponent },
  { path: AppRouting.confContainerAssignInteraction, component: AssignInteractionComponent},
  { path: AppRouting.confContainerAssignDetection, component: AssignDetectionComponent},
  { path: AppRouting.confContainerAssignReaction, component: AssignReactionComponent},
  { path: AppRouting.confRules, component: ShowRulesComponent },
  { path: AppRouting.confAddInteraction, component: AddInteractionRuleComponent, pathMatch: 'full' },
  { path: AppRouting.confInteractionId, component: ConfigureInteractionComponent },
  { path: AppRouting.confAddDetection, component: AddDetectionRuleComponent },
  { path: AppRouting.confDetectionId, component: ConfigureDetectionComponent },
  { path: AppRouting.confAddReaction, component: AddReactionRuleComponent },
  { path: AppRouting.confReactionId, component: ConfigureReactionComponent },
  { path: AppRouting.state, component: ShowStateComponent },
  { path: AppRouting.events, component: EventsComponent },
  { path: AppRouting.interactionEvents, component: InteractionEventsComponent },
  { path: AppRouting.detectionEvents, component: DetectionEventsComponent },
  { path: AppRouting.reactionEvents, component: ReactionEventsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
