import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainsComponent } from './train.component';

const routes: Routes = [
    { path: '', component: TrainsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainsRouting { }
