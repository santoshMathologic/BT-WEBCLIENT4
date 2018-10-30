import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthCookie {
    constructor() { }

    getAuth(): string {
        return Cookie.get('id_token');
    }

    setAuth(value: string): void {
        //0.0138889=20 minuts 
        //this accept day not minuts
        //use for 20 minuts
        Cookie.set('cookie_token', value, 0.0138889);
        //use for 2 minuts
     //  Cookie.set('cookie_token', value,0.00138889)
    }

    deleteAuth(): void {
        Cookie.delete('id_token');
    }
}