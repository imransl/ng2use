import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../shared';
import { BlockSearchPipe } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ngu-block-category',
  templateUrl: 'block-category.component.html',
  pipes: [BlockSearchPipe]
})
export class BlockCategoryComponent implements OnInit {

  constructor() {}
  
  categoryBlocks: Block[];
  
  @Input() blocks: Block[];
  @Input() category: string;
  @Input() searchTerm: string;

  ngOnInit() {
    this.categoryBlocks = this.blocks.filter(block => block.category === this.category);
  }

}
