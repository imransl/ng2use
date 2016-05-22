import { Component, OnInit } from '@angular/core';

import { BlockSearchComponent } from './block-search';
import { BlockFilterComponent } from './block-filter';
import { BlockListComponent } from './block-list';

import { Block } from './shared';
import { BlockService } from './shared';


@Component({
  moduleId: module.id,
  selector: 'ngu-blocks',
  template: require('./blocks.component.html'),
  directives: [BlockSearchComponent, BlockFilterComponent, BlockListComponent],
  providers: [BlockService]
})
export class BlocksComponent implements OnInit {
  constructor(private blockService: BlockService) {}

  blockList: Block[];

  ngOnInit() {
    this.getBlocks();
  }

  getBlocks() {
    this.blockList = this.blockService.getBlocks();
  }

}