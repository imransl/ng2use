import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BlockSearchComponent } from './block-search';
import { BlockFilterComponent } from './block-filter';
import { BlockListComponent } from './block-list';

import { Block } from './shared';
import { BlockService } from './shared';

import { BlockFilterPipe } from './shared';
import { BlockSearchPipe } from './shared';

@Component({
  selector: 'ngu-blocks',
  templateUrl: 'app/blocks/blocks.component.html',
  directives: [BlockSearchComponent, BlockFilterComponent, BlockListComponent],
  providers: [BlockService],
  pipes: [BlockFilterPipe, BlockSearchPipe]
})
export class BlocksComponent implements OnInit {
  blockList$: Observable<Block[]>;

  constructor(private blockService: BlockService) { }

  ngOnInit() {
    this.getBlocks();
  }

  getBlocks() {
    this.blockList$ = this.blockService.getBlocks();
  }

}
