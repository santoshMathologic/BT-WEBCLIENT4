import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'aw-member-list',
  template: `
     <h2>MEMBERS List components</h2>
     `
})
export class MemberListComponent implements OnInit {


  private selectedId: number;

  constructor(
    ) { }

  ngOnInit() {
  }


}
