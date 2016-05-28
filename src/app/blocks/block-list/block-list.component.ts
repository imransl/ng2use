import { Component, Input, OnInit } from '@angular/core';
import { BlockCategoryComponent } from '../block-category';
import { Block } from '../shared';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'ngu-block-list',
  template: require('./block-list.component.html'),
  directives: [BlockCategoryComponent]
})
export class BlockListComponent {
  @Input() blocks: Block[];

  constructor() { }

  ngOnInit() { }

}
