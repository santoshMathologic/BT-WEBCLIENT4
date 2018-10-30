import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { UploadRouting } from './upload.component.routing';
import { BreadCrumbModule } from '../../_modules/bread-crumb/breadCrumb.module';

@NgModule({
    imports: [
        CommonModule,
        UploadRouting,
        BreadCrumbModule

    ],
    declarations: [
        UploadComponent,
    ]
})
export class UploadModule {

}
