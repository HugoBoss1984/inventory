import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialListComponent } from './material-list.component';
import { DatasourceMysqlService } from '../../services/datasource-mysql.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    MaterialListComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule /*, NgbModule*/
  ],
  exports: [
    MaterialListComponent
  ],
  providers: [DatasourceMysqlService]
})
export class MaterialListModule { }
