import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'TWOZEROONE-ERROR',
    providers: [],
    animations: [],
    templateUrl: '../200_OK/200_OK.tmpl.html',
    styleUrls: ['../error.main.css']
})
export class TWOZEROONE_OK implements OnInit {

    public codeName = "401 ERROR";
    public description = "The page you are request can't authorized Perhapes You are here"
    constructor() {

    }

    ngOnInit() {

    }

}
