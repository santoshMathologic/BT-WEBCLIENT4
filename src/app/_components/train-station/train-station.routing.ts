import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainStationComponent } from './train-station.component';

const routes: Routes = [
    { path: '', component: TrainStationComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainStationRouting { }
