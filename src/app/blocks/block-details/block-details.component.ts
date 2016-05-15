import { Component, Input, OnInit } from '@angular/core';
import { BlockService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ngu-block-details',
  templateUrl: 'block-details.component.html'
})
export class BlockDetailsComponent implements OnInit {
  @Input() block;
  details = {};

  constructor(private blockService: BlockService) {}

  ngOnInit() {
    this.block.image = 'assets/images/characters/' + this.block.character + '.svg';
    // this.getBlockDetails();
  }
  
  getBlockDetails() {
    this.blockService.getBlockDetails(this.block.repo)
      .subscribe(details => this.details = details);
  }

}
