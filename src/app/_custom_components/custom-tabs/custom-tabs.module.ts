import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTabsComponent } from './custom-tabs.component';
import { CustomTabsRouting } from './custom-tabs.routing';

@NgModule({
  imports: [
    CommonModule,
    CustomTabsRouting
  ],
  declarations: [
    CustomTabsComponent,

  ]
})
export class customTabModule { }
