import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { SidebarComponent } from 'src/app/layout/sidebar/sidebar.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { LayoutDefaultComponent } from 'src/app/layout/layout-default/layout-default.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LayoutDefaultComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    LayoutDefaultComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SharedModule
  ],
  
})
export class LayoutModule { }
