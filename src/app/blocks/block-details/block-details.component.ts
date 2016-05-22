import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../shared';
import { BlockService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ngu-block-details',
  template: require('./block-details.component.html')
})
export class BlockDetailsComponent implements OnInit {
  @Input() block: Block;
  details = {};

  constructor(private blockService: BlockService) {}

  ngOnInit() {
    this.block.character = 'assets/images/characters/' + this.block.character + '.svg';
    this.getBlockDetails();
  }
  
  getBlockDetails() {
    this.blockService.getBlockDetails(this.block.repo)
      .subscribe(details => {
        details['updated_at'] = new Date(details['updated_at']);
        this.details = details;
      });
  }

}
