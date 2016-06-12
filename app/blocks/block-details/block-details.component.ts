import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../shared';
import { BlockService } from '../shared';

@Component({
  selector: 'ngu-block-details',
  templateUrl: 'app/blocks/block-details/block-details.component.html'
})
export class BlockDetailsComponent implements OnInit {
  @Input() block: Block;

  characterImage: string;
  details: Object;

  constructor(private blockService: BlockService) { }

  ngOnInit() {
    this.characterImage = 'assets/images/characters/' + this.block.character + '.svg';
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
