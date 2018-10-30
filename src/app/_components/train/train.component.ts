import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { slideToTopTransition } from '../../_animations/router.animations';
import "../../_prototypes/format.prototype"
@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss'],
  animations: [slideToTopTransition()]
})
export class TrainsComponent implements OnInit {

  router:any;
  urlpart:string;
  constructor(private _router: Router,private activeRoute:ActivatedRoute) {
    this.router = _router;
    this.urlpart = this.router.url.checkRoute();


  }

  ngOnInit() {
  }

}
