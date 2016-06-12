import { Component, Input, OnInit } from '@angular/core';
import { BlockCategoryComponent } from '../block-category';
import { Block } from '../shared';

@Component({
  selector: 'ngu-block-list',
  templateUrl: 'app/blocks/block-list/block-list.component.html',
  directives: [BlockCategoryComponent]
})
export class BlockListComponent implements OnInit {
  @Input() blocks: Block[];
  categories: string[];

  constructor() { }

  ngOnInit() {
    this.categories = ['official', 'ui', 'helpers', 'starters', 'ngrx', 'education'];
  }

}
