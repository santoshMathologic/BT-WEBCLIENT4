import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankComponent } from './blank.component';

import { BlankRouting } from './blank.routing';
import { PageHeaderModule } from '../../_modules/index';

import { BreadCrumbModule } from '../../_modules/bread-crumb/breadCrumb.module';


@NgModule({
  imports: [
    CommonModule,
    BlankRouting,
    PageHeaderModule,
    BreadCrumbModule,

  ],
  declarations: [
    BlankComponent,

  ]
})
export class blankModule { }
