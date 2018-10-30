import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { StatModule } from '../../_modules/stat/stat.module';
import { PageHeaderModule } from '../../_modules/page-header/page-header.module';
import { BreadCrumbModule } from '../../_modules/bread-crumb/breadCrumb.module';
import { ImageSliderModule } from '../../_modules/image-slider/image-slider.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LaddaModule } from 'angular2-ladda';
@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    StatModule,
    PageHeaderModule,
    BreadCrumbModule,
    ImageSliderModule,
    NgbModule.forRoot(),
    LaddaModule.forRoot({
      style: "contract",
      spinnerSize: 40,
      spinnerColor: "red",
      spinnerLines: 20
  })
  ],
  declarations: [
    HomeComponent,
    
  ]
})
export class HomeModule {

}
