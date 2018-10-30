import { Component, OnInit } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  // animations: [
  //   trigger('mainContainerAnim', [
  //     state('open', style({ marginLeft: '0px' })),
  //     state('close', style({ marginLeft: '-100px' })),
  //   ])
  // ]
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event:Event) => event instanceof NavigationEnd)
    ).subscribe(x => console.log(x))
  }



  ngOnInit() {

  }


}
