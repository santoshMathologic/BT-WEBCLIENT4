import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserplanComponent } from './userplan.component';
import { UserPlanRouting } from './userplan.routing';
import { PageHeaderModule } from '../../_modules/index';
import { BreadCrumbModule } from '../../_modules/bread-crumb/breadCrumb.module';


@NgModule({
  imports: [
    CommonModule,
    UserPlanRouting,
    PageHeaderModule,
    BreadCrumbModule
  ],
  declarations: [
    UserplanComponent

  ]
})
export class UserplanModule { }
