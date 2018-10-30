import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserComponentRouting } from './user.component.routing';



@NgModule({
    imports: [
        CommonModule,
        UserComponentRouting
    ],
    declarations: [
        UserComponent,

    ]
})
export class UserModule { }
