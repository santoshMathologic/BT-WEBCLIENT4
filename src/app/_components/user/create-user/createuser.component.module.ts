import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './createuser.component';
import { CreateUserComponentRouting } from './createuser.component.routing';



@NgModule({
    imports: [
        CommonModule,
        CreateUserComponentRouting
    ],
    declarations: [
        CreateUserComponent,

    ]
})
export class CreateUserComponentModule { }
