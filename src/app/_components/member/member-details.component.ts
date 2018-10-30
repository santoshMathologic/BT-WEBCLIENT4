import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';




@Component({
  selector: 'aw-member-detail',
  template: `
    <h2>MEMBER</h2>
  `
})
export class MemberDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {

  }

}
