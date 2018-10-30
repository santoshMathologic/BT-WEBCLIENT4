import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainStationComponent } from './train-station.component';
import { TrainStationRouting } from './train-station.routing';

@NgModule({
  imports: [
    CommonModule,
    TrainStationRouting,

  ],
  declarations: [
    TrainStationComponent,
  ]
})
export class trainStationModule {

}
