import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
    console.log(this.el);
    this.r.setStyle(this.el.nativeElement, 'color', 'blue');
  }
}


