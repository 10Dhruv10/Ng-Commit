import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',

  //host is used for what to do when user hovers over element
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HighlightDirective {

  private elementRef = inject(ElementRef);                            //grants access to DOM element, a reference 

  constructor(){
    this.elementRef.nativeElement.style.backgroundColor = 'green'     //default color is green
  }


  private highlightMyStuff(color: string){
    this.elementRef.nativeElement.style.backgroundColor = color
  }

  colorFromApp = input('')
  defaultColor = input('')
  onMouseEnter(){
    this.highlightMyStuff(this.colorFromApp() || this.defaultColor() || 'yellow')
  }
  onMouseLeave(){
    this.highlightMyStuff('')
  }




}
