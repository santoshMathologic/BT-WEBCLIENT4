import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { slideToTopTransition } from '../../_animations/router.animations';
import {Router,ActivatedRoute} from '@angular/router'
import "../../_prototypes/format.prototype"

@Component({
  selector: 'app-userplan',
  templateUrl: './userplan.component.html',
  styleUrls: [
    './userplan.component.scss',
    './userplan.component.css'
],
  animations: [slideToTopTransition()]
})
export class UserplanComponent implements OnInit {

  router:any;
  urlpart:string;
  constructor(private _router: Router,private activeRoute:ActivatedRoute,private http: HttpClient ) {
    this.router = _router;
    this.urlpart = this.router.url.checkRoute();
  }

  ngOnInit() {
  }

  

}
