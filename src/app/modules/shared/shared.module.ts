import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/widgets/card/card.component';
import { AreaComponent } from '../../shared/widgets/area/area.component';
import { PieComponent } from '../../shared/widgets/pie/pie.component';
import { MaterialModule } from '../material/material.module';
import { DatePickerDemoComponent } from 'src/app/components/date-picker-demo/date-picker-demo.component';




@NgModule({
  declarations: [
    CardComponent,
    AreaComponent,
    PieComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    CardComponent,
    AreaComponent,
    PieComponent,
  ]
})
export class SharedModule { }
