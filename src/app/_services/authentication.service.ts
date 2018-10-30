import { Injectable } from '@angular/core';
import {Http,RequestOptions,RequestOptionsArgs,Response,Request,Headers,XHRBackend} from '@angular/http';

import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {globalApiSettings} from "../_settings/settings.index"

class getCurrentDateInMin {

    public getMin(): void {
        let date = new Date();
        date.setTime(date.getTime() + (60 * 1000));
    }
}

@Injectable()
export class AuthenticateService {
    constructor(private _http: Http) {
    }
    login(username: string, password: string) {


        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        let options = new RequestOptions({ "headers": headers });
        return this._http.post(globalApiSettings.loginUri, { "username": username, "password": password }, options)
            .toPromise().then((response) => response.json());


    }
    logout() {

        // this._http
        //     .get(globalApiSettings.logoutUri)
        //     .map(successResponse => successResponse)
        //     .subscribe(successResponse => {
        //         this.removeAuthSession();
        //     }, error => {
        //         console.log(JSON.stringify(error.json()));
        //     });


    }

    private setAuthSession(response) {
        localStorage.setItem('token', response.json()['token']);
        localStorage.setItem('username', response.json()['username']);

        Cookie.set('token', response.json()['token'], 1, '/login');
        Cookie.set('username', response.json()['username'], 1, '/login');

        // sessionStorage.setItem("token", successResponse.json()['token']);
        // sessionStorage.setItem("username", successResponse.json()['username']);
        // Cookie.set('cookieName', 'cookieValue', 10, '/myapp/', 'mydomain.com');
        // let myCookie = Cookie.get('cookieName');
        // let cookielist = Cookie.getAll();
        // Cookie.delete('cookieName');
        // Cookie.deleteAll();

    }
    private removeAuthSession() {
        localStorage.removeItem['token'];
        localStorage.removeItem['username'];
        Cookie.delete['token'];
        Cookie.delete['username'];
        localStorage.clear();
        sessionStorage.clear();
        Cookie.deleteAll();
    }
}
