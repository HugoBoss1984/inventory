import { Injectable } from '@angular/core';
import { DatasourceMysqlService } from './datasource-mysql.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialListService {
  materials: any[] = []
  constructor(private datasource: DatasourceMysqlService) { }

  loadMaterials(){
    return this.datasource.getMaterials()
  }

  setMaterials(materials: any[]) {
    this.materials = materials
  }

  getMaterials(): any[] {
    return this.materials
  }
}
