import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachinesComponent } from './machines/machines.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MachineDetailComponent} from './machine-detail/machine-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'machines/:address', component: MachineDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
