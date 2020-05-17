import { Component, OnInit } from '@angular/core';
import { MaterialListService } from 'src/app/services/material-list.service';

@Component({
  selector: 'material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  public rows: any[] = []
  constructor(private repoMaterials: MaterialListService) { }

  ngOnInit(): void {
    this.loadRows()
  }

  get materials(): any[] {
    return this.repoMaterials.getMaterials()
  }

  loadRows() {
    this.repoMaterials.loadMaterials().subscribe(result =>  {
      this.rows = result
    })
  }
}
