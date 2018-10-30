import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomTabsComponent } from './custom-tabs.component';

const routes: Routes = [
  { path: '',  component: CustomTabsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomTabsRouting{}
