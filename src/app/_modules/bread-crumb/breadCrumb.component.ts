import { Component, OnInit, Input} from '@angular/core';


@Component({
    selector: 'app-bread-crumb',
    templateUrl: './breadCrumb.component.html',
    styleUrls: ['./breadCrumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
    @Input() heading: string;
    @Input() icon: string;
    @Input() nSize: string;
    @Input() urlPart: string[];
    
    constructor() {
        
     }
     ngAfterViewInit() {
        
      }

    ngOnInit() { }
}
