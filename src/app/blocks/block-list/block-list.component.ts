import { Component, OnInit } from '@angular/core';
import { BlockCategoryComponent } from '../block-category';

@Component({
  moduleId: module.id,
  selector: 'ngu-block-list',
  templateUrl: 'block-list.component.html',
  directives: [BlockCategoryComponent]
})
export class BlockListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
