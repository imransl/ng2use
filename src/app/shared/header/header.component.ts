import { Component, ElementRef, Inject, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'ngu-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  elementRef: ElementRef;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
    jQuery(this.elementRef.nativeElement).find('.button-collapse').sideNav();
  }

}
