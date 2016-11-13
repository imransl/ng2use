import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../shared';
import { BlockService } from '../shared';

@Component({
  selector: 'ngu-block-details',
  templateUrl: './block-details.component.html'
})
export class BlockDetailsComponent implements OnInit {
  @Input() block: Block;

  characterImage: string;

  constructor(private blockService: BlockService) { }

  ngOnInit() {
    this.characterImage = 'assets/images/characters/' + this.block.character + '.svg';
    this.getBlockDetails();
  }

  getBlockDetails() {
    this.blockService.getBlockDetails(this.block.repo)
      .subscribe(details => {
        let remoteDetails = {
          description: details.description,
          username: details.owner.login,
          avatar: details.owner.avatar_url,
          watchers: details.watchers,
          homepage: details.homepage,
          lastUpdate: new Date(details.updated_at).toUTCString(),
          repoUrl: details.html_url
        };

        Object.assign(this.block, remoteDetails);
      });
  }

}
