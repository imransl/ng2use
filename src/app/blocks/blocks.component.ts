import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Block } from './shared';
import { BlockService } from './shared';

@Component({
  selector: 'ngu-blocks',
  templateUrl: './blocks.component.html'
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
