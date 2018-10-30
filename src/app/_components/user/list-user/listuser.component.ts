import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
// import { AuthHttp, AuthConfig } from 'angular2-jwt';
//import { Observable } from 'rxjs/Rx';


// import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class ListUsersComponent implements OnInit {
   name = "User";
  public usersList:any[]=[];
  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";
  // private toasterService: ToasterService;
  // constructor(private http: Http, toasterService: ToasterService) {
  //   this.toasterService = toasterService;
  // }
  constructor(){

  }
  ngOnInit() {
    let url = 'http://localhost:4000/api/v1/new/admin/getUsers';
    let headers = new Headers();
    headers.append('token', localStorage.getItem("token"));
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    // this.http.get(url, options)
    //   .map((res: Response) => (
    //     res.json()
    //   )).subscribe(data => {
    //     this.usersList = data.results;

    //   })
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }

  getItemPerPage(ItemPerPage) {
    console.log(ItemPerPage);
  }



  // public config1: ToasterConfig = new ToasterConfig({
  //   positionClass: 'toast-top-right',

  // });


  // public toasterconfig: ToasterConfig =
  //   new ToasterConfig({
  //     tapToDismiss: false,
  //     animation: 'fade',
  //     limit: 5,
  //     showCloseButton: { 'warning': true, 'error': false },
  //     timeout: 2000
  //   });

  // popToast() {
  //   this.toasterService.pop('success', 'Args Title', 'Args Body');
  // }


}
