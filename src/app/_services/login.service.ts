import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { ILogin } from '../_interfaces/login.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService implements ILogin {

    isLoggedIn: boolean = false;

    constructor(private _httpclient: HttpClient) {

    }
    checkSession(): boolean {
        if (localStorage.getItem("token") && localStorage.getItem("username")) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
            //   delete this.Username;
        }
        return (this.isLoggedIn) ? true : false;
    }

    doLogin(username, password): boolean {
        
        return true;
    }
    doLogout(): void {
        
        if (this.isLoggedIn) {
            this.isLoggedIn = false;
            localStorage.removeItem('username');
            localStorage.removeItem('userplan');
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.clear();
        }
    }


}
