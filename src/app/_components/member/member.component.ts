import { Component } from '@angular/core';

@Component({
  template: `Member works!

  <ul class="nav nav-tabs">
  <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a routerLink="/members/membersdetail"> <i class="fa fa-dashboard"></i> Member Details</a></li>
  <li><a routerLink="/members/membersListComponent" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><i class="fa fa-dashboard"></i> List Component</a></li>
  <li><a routerLink="/members/membersdetail" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><i class="fa fa-dashboard"></i> Menu 2</a></li>
  <li><a routerLink="/members/membersListComponent" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><i class="fa fa-dashboard"></i> Menu 3</a></li>
</ul>
<router-outlet></router-outlet>
  `
})
export class MemberComponent {
}
