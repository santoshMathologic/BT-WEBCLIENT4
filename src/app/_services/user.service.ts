import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { UserModel } from '../_models/User';
 
@Injectable()
export class UserService {
    constructor(public httpservice:Http) {

     }
 
    getAll() {
        //return this.httpservice.get('/api/users', this.authHeader()).map((response: Response) => response.json());
    }
 
    getById(id: number) {
       // return this.httpservice.get('/api/users/' + id, this.authHeader()).map((response: Response) => response.json());
    }
 
    create(user: UserModel) {
      //  return this.httpservice.post('/api/users', user, this.authHeader()).map((response: Response) => response.json());
    }
 
    update(user: UserModel) {
     //   return this.httpservice.put('/api/users/' + user._id, user, this.authHeader()).map((response: Response) => response.json());
    }
 
    delete(id: number) {
      //  return this.httpservice.delete('/api/users/' + id, this.authHeader()).map((response: Response) => response.json());
    }
 
    
 
    private authHeader() {
        
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}