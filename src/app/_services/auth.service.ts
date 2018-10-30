import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Observable, of } from 'rxjs'
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/delay';

import { Http } from '@angular/http';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;

    constructor(private http: Http){

    }

    // login(): Observable<boolean> {
        login(): void {
        // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
        // return this.http
        //     // .get(`https://api.spotify.com/v1/search?q=${term}&type=artist`)
        //     .get(`https://api.spotify.com/v1/search`)
        //     .map((response) => response.json())
        //     .toPromise();
    }


// logout(): void {
//     this.isLoggedIn = false;
// }
}
