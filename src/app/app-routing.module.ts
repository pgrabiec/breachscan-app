import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachinesConfigurationComponent} from './machines-configuration/machines.configuration.component';
import {AppRouting} from './app-routing';
import {HomeComponent} from './home/home.component';
import {MachineConfigurationComponent} from './machine-configuration/machine-configuration.component';
import {ConfAddMachineComponent} from './conf-add-machine/conf-add-machine.component';

const routes: Routes = [
  { path: '', redirectTo: AppRouting.home, pathMatch: 'full' },
  { path: AppRouting.home, component: HomeComponent},
  { path: AppRouting.confMachines, component: MachinesConfigurationComponent},
  { path: AppRouting.confAddMachine, component: ConfAddMachineComponent, pathMatch: 'full' },
  { path: AppRouting.confMachineAddress, component: MachineConfigurationComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
