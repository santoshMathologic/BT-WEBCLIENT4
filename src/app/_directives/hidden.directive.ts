import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[myHidden]' })

export class HiddenDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
}