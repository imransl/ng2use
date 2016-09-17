import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Block } from '../shared';

@Component({
  selector: 'ngu-block-category',
  templateUrl: './block-category.component.html'
})
export class BlockCategoryComponent implements OnInit, OnChanges {
  @Input() blocks: Block[];
  @Input() category: string;

  categoryBlocks: Block[];

  constructor() { }

  ngOnInit() {
    this.categoryBlocks = this.blocks.filter(block => block.category === this.category);
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    const filteredBlocks: Block[] = changes['blocks'].currentValue;
    this.categoryBlocks = filteredBlocks.filter(block => block.category === this.category);
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

  toggleBlockDetails(selectedBlock: Block) {
    const show = !selectedBlock.show;
    this.categoryBlocks.forEach(block => block.show = false);
    selectedBlock.show = show;
  }

}
