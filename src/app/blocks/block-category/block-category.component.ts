import { Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { Block } from '../shared';
import { BlockDetailsComponent } from '../block-details';
import { BlockSearchPipe } from '../shared';
import { BlockFilterPipe } from '../shared';

// declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'ngu-block-category',
  template: require('./block-category.component.html'),
  directives: [BlockDetailsComponent],
  pipes: [BlockSearchPipe, BlockFilterPipe]
})
export class BlockCategoryComponent implements OnInit {
  // elementRef: ElementRef;
  // accordion: <any>;

  // constructor(@Inject(ElementRef) elementRef: ElementRef) {
  //   this.elementRef = elementRef;
  // }
  
  constructor() {}
  
  categoryBlocks: Block[];
  
  @Input() blocks: Block[];
  @Input() category: string;
  @Input() searchTerm: string;
  @Input() filterTerm: string;

  ngOnInit() {
    this.categoryBlocks = this.blocks.filter(block => block.category === this.category);
    // this.accordion = jQuery(this.elementRef.nativeElement).find('.collapsible')
    // this.accordion.collapsible();
  }
  
  setBlockTitleClass(status: string) {
    switch (status) {
      case 'stable': return 'green';
      case 'rc': return 'blue';
      case 'beta': return 'orange';
      case 'alpha': return 'red';
      default: return 'grey';
    };
  }
  
  toggleBlockDetails(block: Block) {
    this.blocks.forEach(block => block['show'] = false);
    // block.show = !block.show;
  }

}
