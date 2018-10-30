import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { elementComponent } from './elements.component';
import { elementRouting } from './elements.component.routing';



@NgModule({
    imports: [
        CommonModule,
        elementRouting
    ],
    declarations: [
        elementComponent,

    ]
})
export class ElementModule { }
