import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective { 
  private templateRef = inject(TemplateRef)              //has unrendered html
  private viewContainerRef = inject(ViewContainerRef)    //a DOM place where angular can insert/remove views  (like a container) 

  @Input() set appStructural(condition: boolean){
    if (condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
    else{
      this.viewContainerRef.clear()
    }
  }

}
