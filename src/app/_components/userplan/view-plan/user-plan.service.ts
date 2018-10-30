import { Injectable } from '@angular/core';
import {
    Http,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Request,
    Headers,
    XHRBackend
} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
// import { Observable } from "rxjs/Rx";
import {
    globalApiSettings,
    environment
} from '../../../_settings/settings.index';

interface UserPlan {
    _id: object,
    planName: string,
    owner: string,
    createdTime: Date,
    markDelete: boolean,
    isLinkGenerated: boolean,
    isLocked: boolean,
    isUnderReview: boolean,
    isComplete: boolean,

}
class _UserPlan {
    constructor(
        public _id: object,
        public planName: string,
        public owner: string,
        public createdTime: Date,
        public markDelete: boolean,
        public isLinkGenerated: boolean,
        public isLocked: boolean,
        public isUnderReview: boolean,
        public isComplete: boolean,
    ) { }
}

@Injectable()
export class UserService {
    headers: Headers;
    options: RequestOptions;
    constructor(private _http: Http) {

        this.headers = new Headers();
        this.headers.append('token', localStorage.getItem("token"));
        this.headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({ headers: this.headers });

    }
    // getUserPlan(): Observable<UserPlan[]> {

    //     return this._http.get(globalApiSettings.planUri, this.options)
    //         .map((res: Response) => res.json())
    //         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    // }

    loadUserPlanWithPromise(query): Promise<any> {
        let options = new RequestOptions({ headers: this.headers,params: query });
        return this._http.get(globalApiSettings.planUri,options)
            .toPromise()
            .then(this.successResponse)
            .catch(this.errorResponse);
    }


    private successResponse(successRes: Response) {
        let body = successRes.json();
        return body || {};
    }
    private errorResponse(errorRes: Response) {
        let body = errorRes.json();
        return body._results || {};


    }

    loadUserPlanWithOnlyPromise() {
        let headers = new Headers();
        headers.append('token', localStorage.getItem("token"));
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.get(globalApiSettings.planUri, options)
            .toPromise()
            .then(this.successCallBack)
            .catch(this.errorCallBack);
    }

    private successCallBack(successRes: Response) {
        let body = successRes.json();
        return body || {};

    }
    private errorCallBack(errorRes: Response) {
        console.error('An error occurred', errorRes);
        return Promise.reject(errorRes.json || {});

    }

}