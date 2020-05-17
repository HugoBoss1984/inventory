import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MaterialListComponent } from '../material-list/material-list.component';
import { EmployeesComponent } from '../employees/employees.component';
import { AssignmentsComponent } from '../assignments/assignments.component';
// import { DeactivateCalendarService } from 'src/app/services/deactivate-calendar.service';
// import { DeactivateCustomerService } from 'src/app/services/deactivate-customer.service';

const routes: Routes = [
  // {path:"negozio", component: NegozioComponent, canActivate: [NegozioGuard]},
  { path:"material-list", component: MaterialListComponent, /*canDeactivate: [DeactivateCalendarService] */},
  { path:"employees", component: EmployeesComponent, /*canDeactivate: [DeactivateCustomerService] */},
  { path:"assignment", component: AssignmentsComponent, /*canDeactivate: [DeactivateCustomerService] */},
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminModule { }
