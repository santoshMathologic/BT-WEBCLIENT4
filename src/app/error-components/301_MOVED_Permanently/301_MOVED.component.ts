import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'FORZEROONE-ERROR',
    providers: [],
    animations: [],
    templateUrl: '../401_UNAUTHORIZED/401.template.html',
    styleUrls: ['../error.main.css']
})
export class FOR_NOT_ONE_UNAUTHRIZED implements OnInit {

    public codeName = "401 ERROR";
    public description = "The page you are request can't authorized Perhapes You are here"
    constructor() {

    }

    ngOnInit() {

    }

}
