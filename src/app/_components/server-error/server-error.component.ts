import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {

  imagePath:string;
  constructor() { 
    this.imagePath = "../../../assets/serverError.png"
  }

  ngOnInit() {
  }

}
