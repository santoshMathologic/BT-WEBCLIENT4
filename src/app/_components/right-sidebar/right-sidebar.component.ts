import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

import * as $ from 'jquery';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0.4 }),
          animate('80ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('1000ms', style({ transform: 'translateX(100%)', opacity: 0 }))
        ])

      ]),

    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])

  ]
})
export class RightSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var animationSpeed = 300;
    var subMenuSelector = '.sidebar-submenu';
    // $.  = function(menu){

    // }
    $(".sidebar-submenu").on('click', 'li a', function (e) {
      alert("DASD");

    });
  }

}
