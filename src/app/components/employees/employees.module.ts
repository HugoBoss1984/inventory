import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { DatasourceMysqlService } from '../../services/datasource-mysql.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule /*, NgbModule*/
  ],
  exports: [
    EmployeesComponent
  ],
  providers: [DatasourceMysqlService]
})
export class EmployeesModule { }
