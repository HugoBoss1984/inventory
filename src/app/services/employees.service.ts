import { Injectable } from '@angular/core';
import { DatasourceMysqlService } from './datasource-mysql.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees: any[] = []
  constructor(private datasource: DatasourceMysqlService) { }

  loadEmployees(){
    return this.datasource.getEmployees()
  }

  setEmployees(employees: any[]) {
    this.employees = employees
  }

  getEmployees(): any[] {
    return this.employees
  }
}
