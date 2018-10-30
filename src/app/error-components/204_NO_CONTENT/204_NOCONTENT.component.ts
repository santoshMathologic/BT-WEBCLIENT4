import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'TWOZEROONE-ERROR',
    providers: [],
    animations: [],
    templateUrl: '../204_NO_CONTENT/204_NOCONTENT.templ.html',
    styleUrls: ['../error.main.css']
})
export class TWOZEROONE_NOCONTENT implements OnInit {

    public codeName = "401 ERROR";
    public description = "The page you are request can't authorized Perhapes You are here"
    constructor() {

    }

    ngOnInit() {

    }

}
