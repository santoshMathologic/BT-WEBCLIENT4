import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { slideToTopTransition } from '../../_animations/router.animations';
import {Router,ActivatedRoute} from '@angular/router'
import "../../_prototypes/format.prototype"

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
  animations: [slideToTopTransition()]
})
export class BlankComponent implements OnInit {

  commentsList: object;
  isloading: boolean = false;

  router:any;
  urlpart:string;
  constructor(private _router: Router,private activeRoute:ActivatedRoute,private http: HttpClient ) {
    this.router = _router;
    this.urlpart = this.router.url.checkRoute();


  }

  
  ngOnInit(): void {
    this.isloading = true;

    setTimeout(() => {
      this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(data => {
        this.commentsList = data;
        this.isloading = false;
      });
    }, 500);

  }

 


}
