import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatasourceMysqlService {

  baseUrl: string

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.baseUrl
  }

  getMaterials(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "getMaterials"); 
  }
}
