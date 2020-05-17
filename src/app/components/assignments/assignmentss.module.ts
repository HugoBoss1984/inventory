import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentsComponent } from './assignments.component';
import { DatasourceMysqlService } from '../../services/datasource-mysql.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AssignmentsComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule /*, NgbModule*/
  ],
  exports: [
    AssignmentsComponent
  ],
  providers: [DatasourceMysqlService]
})
export class AssignmentsModule { }
