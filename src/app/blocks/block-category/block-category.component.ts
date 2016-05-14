import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ngu-block-category',
  templateUrl: 'block-category.component.html'
})
export class BlockCategoryComponent implements OnInit {

  constructor() {}
  
  @Input() blocks: Block[];
  @Input() category: string;

  ngOnInit() {
  }

}
