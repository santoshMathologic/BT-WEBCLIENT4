import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';

//import { Observable } from 'rxjs/Rx';




@Component({
  selector: 'app-user',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateUserComponent implements OnInit {
   name = "User";
  public usersList:any[]=[];
  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";
  
  constructor(private http: Http) {
    
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







}
