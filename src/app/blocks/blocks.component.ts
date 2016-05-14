import { Component, OnInit } from '@angular/core';
import { BlockSearchComponent } from './block-search';
import { BlockFilterComponent } from './block-filter';
import { BlockListComponent } from './block-list';

import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'ngu-blocks',
  templateUrl: 'blocks.component.html',
  directives: [BlockSearchComponent, BlockFilterComponent, BlockListComponent],
  providers: [HTTP_PROVIDERS]
})
export class BlocksComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}