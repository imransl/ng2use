import { Component, OnInit } from '@angular/core';
import { BlockCategoryComponent } from '../';

import { Block } from '../';
import { BlockService } from '../';

@Component({
  moduleId: module.id,
  selector: 'ngu-block-list',
  templateUrl: 'block-list.component.html',
  directives: [BlockCategoryComponent]
})
export class BlockListComponent implements OnInit {

  constructor(private blockService: BlockService) {}
  
  blockList: Block[];

  ngOnInit() {
    this.getBlocks();
  }
  
  getBlocks() {
    this.blockService.getBlocks()
                      .subscribe(blocks => this.blockList = blocks);
  }

}
