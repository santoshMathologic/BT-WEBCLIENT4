import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbartooltips]',
})
export class NavbartooltipsDirective {
  private _defaultColor = 'white';
  private el: HTMLElement;
  constructor(el: ElementRef) { this.el = el.nativeElement; }
  @Input() bckColor: string;
  @Input() txtColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    //this.el.style.background = 'rgba(0,0,0,0.65)' //(this.bckColor || this._defaultColor);
    this.el.style.background = '#363d4a';
    this.el.style.zIndex = '1000'
    this.el.style.opacity = '0.5';
    this.el.style.transition = 'all .2s ease;';
    this.el.style.display='block';
    this.el.style.color = (this.txtColor || this._defaultColor);
    
    
    
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.style.background = null;
    this.el.style.color = null;
    this.el.style.opacity = '1';
  }



}
