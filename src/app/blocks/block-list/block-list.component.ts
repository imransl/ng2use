import { Component, OnInit } from '@angular/core';
import { BlockCategoryComponent } from '../block-category';

import { BlockService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ngu-block-list',
  templateUrl: 'block-list.component.html',
  directives: [BlockCategoryComponent],
  providers: [BlockService]
})
export class BlockListComponent implements OnInit {

  constructor(private blockService: BlockService) {}
  
  blockList: Object;

  ngOnInit() {
    this.getBlocks();
  }
  
  getBlocks() {
    this.blockService.getBlocks()
                      .subscribe(blockList => this.blockList = blockList);
  }

}
