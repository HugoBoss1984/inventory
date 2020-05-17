import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminModule } from './components/admin/admin.module';
import { MaterialListModule } from './components/material-list/material-list.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MaterialListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
