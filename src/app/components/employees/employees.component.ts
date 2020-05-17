import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public rows: any[] = []
  constructor(private repoEmployees: EmployeesService) { }

  ngOnInit(): void {
    this.loadRows()
  }

  get materials(): any[] {
    return this.repoEmployees.getEmployees()
  }

  loadRows() {
    this.repoEmployees.loadEmployees().subscribe(result =>  {
      this.rows = result
    })
  }
}
