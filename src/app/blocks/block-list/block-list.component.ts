import { Component, ViewChild, ElementRef, Inject, Input, AfterViewChecked } from '@angular/core';
import { BlockCategoryComponent } from '../block-category';
import { Block } from '../shared';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'ngu-block-list',
  templateUrl: 'block-list.component.html',
  directives: [BlockCategoryComponent]
})
export class BlockListComponent implements AfterViewChecked {
  elementRef: ElementRef;

  @Input() blocks: Block[];
  @Input() searchTerm: string;
  @Input() filterTerm: string;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngAfterViewChecked() {
    const container = jQuery(this.elementRef.nativeElement).find('.masonry-container');

    container.imagesLoaded(function () {
      container.masonry({
        columnWidth: '.item',
        itemSelector: '.item'
      });
    });
  }
}
