import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserplanComponent } from './userplan.component';

const routes: Routes = [
    { path: '', component: UserplanComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserPlanRouting { }
