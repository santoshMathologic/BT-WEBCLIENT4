import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ImageSliderComponent } from './image-slider.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule.forRoot(),
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
    ],
    declarations: [ImageSliderComponent],
    exports: [ImageSliderComponent]
})
export class ImageSliderModule { }
