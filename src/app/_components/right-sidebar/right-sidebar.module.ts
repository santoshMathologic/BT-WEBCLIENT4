import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSidebarComponent } from './right-sidebar.component';
import { RightSidebarRouting } from './right-sidebar.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    RightSidebarRouting,
    BrowserAnimationsModule
  ],
  declarations: [
    RightSidebarComponent
  ]
})
export class RegisterModule {

}
