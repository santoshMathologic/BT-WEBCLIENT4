import { Component, OnInit } from '@angular/core';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('headerAnim', [
      state('active', style(
        {
          marginLeft: '0px',
          transition: '0.8s all'
        },


      )),
      state('inactive', style({
        marginLeft: '-180px',
        transition: '0.8s all'
      })),
      //transition('inactive => active', animate('2s all')),
      //transition('active => inactive', animate('2s all'))
    ])
  ]
})
export class HeaderComponent implements OnInit {


  search: string;
  openClose: string = 'active';

  constructor(private leftSidebarComponent: LeftSidebarComponent, private translate: TranslateService, public router: Router) {
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

  }


  ngOnInit() {

  }

  setMyStyles() {
    let styles = {
      // 'background-color': "red"
    };
    return styles;
  }

  openCloseSidebar(): void {
    
    this.leftSidebarComponent.toggleSidebar();
    this.openClose = (this.openClose === 'active') ? 'inactive' : 'active';

  }
  changeLang(language: string) {
    this.translate.use(language);
  }

}
