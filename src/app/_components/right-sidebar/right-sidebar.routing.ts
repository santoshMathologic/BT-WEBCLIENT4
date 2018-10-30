import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RightSidebarComponent } from './right-sidebar.component';

const routes: Routes = [
    { path: '', component: RightSidebarComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RightSidebarRouting { }
