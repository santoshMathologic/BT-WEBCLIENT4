import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './listuser.component';
import { ListUsersComponentRouting } from './listuser.component.routing';



@NgModule({
    imports: [
        CommonModule,
        ListUsersComponentRouting
    ],
    declarations: [
        ListUsersComponent,

    ]
})
export class dashboardComponentModule { }
