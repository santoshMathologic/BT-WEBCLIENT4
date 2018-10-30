import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubComponent } from './club.component';
import { ClubRouting } from './club.routing';

@NgModule({
  imports: [
    CommonModule,
    ClubRouting
  ],
  declarations: [
    ClubComponent
  ]
})
export class ClubModule { }
