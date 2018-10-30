import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { elementComponent } from './elements.component';

const routes: Routes = [
  { path: '', component: elementComponent },
  { path: 'charts', loadChildren: './bootstrapComponents/charts/charts.module#ChartsModule' },
  { path: 'tables', loadChildren: './bootstrapComponents/tables/tables.module#TablesModule' },
  { path: 'forms', loadChildren: './bootstrapComponents/form/form.module#FormModule' },
  { path: 'bs-element', loadChildren: './bootstrapComponents/bs-element/bs-element.module#BsElementModule' },
  { path: 'grid', loadChildren: './bootstrapComponents/grid/grid.module#GridModule' },
  { path: 'blank-page', loadChildren: './bootstrapComponents/blank-page/blank-page.module#BlankPageModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class elementRouting { }
