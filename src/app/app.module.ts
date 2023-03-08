import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LayoutModule } from './modules/layout/layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './modules/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatePickerDemoComponent } from './components/date-picker-demo/date-picker-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,   
    DatePickerDemoComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
