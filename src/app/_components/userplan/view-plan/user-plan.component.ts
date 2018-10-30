import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
//import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user-plan.service';

declare var $: any;

@Component({
  selector: 'app-user-plan',
  templateUrl: './user-plan.component.html',
  styleUrls: ['./user-plan.component.css'],
  providers: [UserService]

})
export class UserPlanComponent implements OnInit {
  public dbpermissions: any[];
  public _userPlansList: any[] = [];
  public _error: string;
  public role: string;
  public _noOfRecords: string;
  public _current: string;
  public _next: string;
  public _last: string;
  public _prev: string;
  public _pages: any[];
  public _pageLen: number;

  public _isshowLoading: boolean = false;
  public query = {
    planName: '',
    owner: '',
    createdTime: '',
    order: 'planName',
    page: 1,
    limit: 10,
  }
  //constructor(private ngPremissionSvc: NgxPermissionsService,
  constructor(private http: HttpClient, private _userService: UserService) {
    //this.dbpermissions = ["ADMIN", "GUEST", "EDITOR", "SUPER"];
  }
  ngAfterViewChecked() {
    //$(document.getElementById("wrapper")).css({"opacity": "0.5","background-color":"rgba(0,0,0,0.8)","width":"100%","height":"100%","position":"fixed","top":"0","bottom":"0"});
  }

  ngOnInit(): void {
    //this.ngPremissionSvc.loadPermissions(this.dbpermissions);
    this._loadallUserplanWithPromise();
  }

  _loadallUserplanWithPromise(): void {
    this._isshowLoading  = true;
    this._userService
      .loadUserPlanWithPromise(this.query)
      .then((data) => {
        if (data.results.length > 0) {
          this._userPlansList = data["results"],
            this._noOfRecords = data["count"],
            this._current = data["current"],
            this._last = data["last"],
            this._next = data["next"],
            this._prev = data["prev"],
            this._pages = data["pages"]
            this._pageLen = this._pages.length;
            this._isshowLoading  = false;
        }else{
          this._userPlansList = data["results"]
          this._isshowLoading  = true;

        }
      }, (error) => {
        // handle error
      });

  }

  _loadallUserplanWithsubscribe(): void {
    // this._userService.getUserPlan().subscribe(
    //   data => this._userPlansList.push(data),
    //   err => {
    //     console.log(err);
    //   });


  }

  pageChanged(event) {
    console.log(event);
    this.query.page = event;
    this._loadallUserplanWithPromise();
  }
  remove(item) {

    const confirmed = window.confirm("Are you Sure ?");
    this._userPlansList.splice(this._userPlansList.indexOf(item), 1);

  }

}
