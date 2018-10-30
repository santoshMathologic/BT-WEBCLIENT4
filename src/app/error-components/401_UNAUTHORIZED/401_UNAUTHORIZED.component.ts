import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'FORZEROONE-ERROR',
    providers: [],
    animations: [],
    templateUrl: '../401_UNAUTHORIZED/401_UNAUTHORIZED.tmpl.html',
    styleUrls: ['../error.main.css']
})
export class FORZEROONE_UNAUTHORIZED implements OnInit {

    public codeName = "401 ERROR";
    public description = "The page you are request can't authorized Perhapes You are here";
    public errorDesc = "Access is Denied Due to Invalid Credential";
    constructor() {

    }

    ngOnInit() {

    }

}
