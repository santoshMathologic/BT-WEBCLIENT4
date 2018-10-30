import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainsComponent } from './train.component';
import { TrainsRouting } from './train.routing';
import { BreadCrumbModule } from '../../_modules/bread-crumb/breadCrumb.module';
@NgModule({
  imports: [
    CommonModule,
    TrainsRouting,
    BreadCrumbModule
    
  ],
  declarations: [
    TrainsComponent,
  ]
})
export class TrainModule {

}
