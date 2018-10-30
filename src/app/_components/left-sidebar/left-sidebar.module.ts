import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftSidebarComponent } from './left-sidebar.component';
import { LeftSidebarRouting } from './left-sidebar.routing';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  imports: [
    CommonModule,
    LeftSidebarRouting,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })


  ],
  declarations: [
    LeftSidebarComponent,
    HeaderComponent,
    FooterComponent,
    RightSidebarComponent
  ]
})
export class LeftSidebarModule { }
