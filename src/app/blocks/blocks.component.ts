import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { BlockSearchComponent } from './block-search';
import { BlockFilterComponent } from './block-filter';
import { BlockListComponent } from './block-list';

import { Block } from './shared';
import { BlockService } from './shared';


@Component({
  moduleId: module.id,
  selector: 'ngu-blocks',
  templateUrl: 'blocks.component.html',
  directives: [BlockSearchComponent, BlockFilterComponent, BlockListComponent],
  providers: [HTTP_PROVIDERS, BlockService]
})
export class BlocksComponent implements OnInit {
  constructor(private blockService: BlockService) {}

  blockList: Block[];

  ngOnInit() {
    this.getBlocks();
  }

  getBlocks() {
    this.blockService.getBlocks()
      .subscribe(blockList => this.blockList = blockList);
  }

}