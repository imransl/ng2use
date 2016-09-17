import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../shared';

@Component({
  selector: 'ngu-block-list',
  templateUrl: './block-list.component.html'
})
export class BlockListComponent implements OnInit {
  @Input() blocks: Block[];
  categories: string[];

  constructor() { }

  ngOnInit() {
    this.categories = ['official', 'ui', 'helpers', 'starters', 'ngrx', 'education'];
  }

}
