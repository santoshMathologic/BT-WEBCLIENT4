import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRouting } from './dasboard.routing';


@NgModule({
  imports: [
    CommonModule,
    DashBoardRouting,
   
  
  ],
  declarations: [
    DashboardComponent,
    
  ]
})
export class DashboardModule {

}
