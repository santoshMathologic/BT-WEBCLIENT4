import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MemberComponent } from './member.component';
import { MemberDetailComponent } from './member-details.component';
import { MemberListComponent } from './member-detailsList.component';

const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
    
    children: [
      { path: 'membersdetail', component: MemberDetailComponent },
      { path: 'membersListComponent', component: MemberListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
