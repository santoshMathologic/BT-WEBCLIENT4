import { Component, OnInit } from '@angular/core';
import { slideToTopTransition } from '../../_animations/router.animations';
import { openClose } from '../../_animations/NewAnimations/openClose.animation';
import { Router, ActivatedRoute } from '@angular/router';
import "../../_prototypes/format.prototype";
import { BaseSixtyFour } from "../../_classes/Base64.class";
import { HttpClient } from '@angular/common/http';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    slideToTopTransition(),
    openClose
  ]

})
export class HomeComponent implements OnInit {

  public router: any;
  public urlpart: string;
  public alerts: Array<any> = [];
  public isLoad: boolean = false;
  public commentsList: object;
  constructor(private _router: Router, private activeRoute: ActivatedRoute, private _http: HttpClient) {
    this.router = _router;
    this.urlpart = this.router.url.checkRoute();
    
    //console.log("",new BaseSixtyFour().encode("santosh"));


    

    this.alerts.push(
      {
        id: 1,
        type: 'success',
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptates est animi quibusdam praesentium quam, et perspiciatis,
          consectetur velit culpa molestias dignissimos
          voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      },
      {
        id: 2,
        type: 'warning',
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptates est animi quibusdam praesentium quam, et perspiciatis,
          consectetur velit culpa molestias dignissimos
          voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      }
    );

  }
  ngOnInit() {

  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public check() {
    this.isLoad = !this.isLoad;
    setTimeout(() => {
      this._http.get('https://jsonplaceholder.typicode.com/comments').subscribe(data => {
        this.commentsList = data;
        this.isLoad = !this.isLoad;
      });
    }, 500);

  }

}
