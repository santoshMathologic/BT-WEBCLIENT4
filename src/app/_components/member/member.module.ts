import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberComponent } from './member.component';
import { MemberDetailComponent } from './member-details.component';
import { MemberListComponent } from './member-detailsList.component';
import { MembersRoutingModule } from './member.routing';


@NgModule({
  imports: [
    CommonModule,
    MembersRoutingModule
  ],
  providers: [

  ],
  declarations: [
    MemberDetailComponent,
    MemberListComponent,
    MemberComponent
  ]
})
export class MembersModule { }
