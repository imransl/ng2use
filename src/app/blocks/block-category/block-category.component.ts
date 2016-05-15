import { Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { Block } from '../shared';
import { BlockDetailsComponent } from '../block-details';
import { BlockSearchPipe } from '../shared';
import { BlockFilterPipe } from '../shared';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'ngu-block-category',
  templateUrl: 'block-category.component.html',
  directives: [BlockDetailsComponent],
  pipes: [BlockSearchPipe, BlockFilterPipe]
})
export class BlockCategoryComponent implements OnInit {
  elementRef: ElementRef;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
  }
  
  categoryBlocks: Block[];
  
  @Input() blocks: Block[];
  @Input() category: string;
  @Input() searchTerm: string;
  @Input() filterTerm: string;

  ngOnInit() {
    this.categoryBlocks = this.blocks.filter(block => block.category === this.category);
    jQuery(this.elementRef.nativeElement).find('.collapsible').collapsible();
  }
  
  setBlockTitleClass(status) {
    switch (status) {
      case 'stable': return 'green';
      case 'rc': return 'yellow';
      case 'beta': return 'orange';
      case 'alpha': return 'red';
      default: return 'grey';
    };
  }
  
  toggleBlockDetails(block) {
    block.show = !block.show;
  }

}
