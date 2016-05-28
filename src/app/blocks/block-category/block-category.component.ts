import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Block } from '../shared';
import { BlockDetailsComponent } from '../block-details';

@Component({
  moduleId: module.id,
  selector: 'ngu-block-category',
  template: require('./block-category.component.html'),
  directives: [BlockDetailsComponent]
})
export class BlockCategoryComponent implements OnInit {
  @Input() blocks: Block[];
  @Input() category: string;

  categoryBlocks: Block[];

  constructor() { }

  ngOnInit() {
    this.categoryBlocks = this.blocks.filter(block => block.category === this.category);
  }
  
  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    const blocks: Block[] = changes['blocks'].currentValue;
    this.categoryBlocks = blocks.filter(block => block.category === this.category);
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
    // this.blocks.forEach(block => block['show'] = false);
    // block.show = !block.show;
  }

}
