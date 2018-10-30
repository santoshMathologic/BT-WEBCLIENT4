import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appStats]'
})
export class StatsDirective {

  constructor(public _elementRef: ElementRef, public _renderer: Renderer) { }

  @Input() stateModel: string;
  @Input() stateComments: string;
  @Input() stateNumber: number;
  @Input() stateName: string;
  @Input() stateColour: string;
  @Input() stateDetails: string;
  @Input() stateType: string;
  @Input() stateGoto: string;


}
