/*import { Directive ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundImage]'
})
export class BackgroundImageDirective {
  private el: HTMLElement;
  constructor(el: ElementRef) { this.el = el.nativeElement;
  }
  // tslint:disable-next-line:no-input-rename
  @Input('background-image') backgroundImage: string;

  ngAfterViewInit() {
      this.el.style.backgroundImage = 'url(' + this.backgroundImage + ')';
  }
}*/
