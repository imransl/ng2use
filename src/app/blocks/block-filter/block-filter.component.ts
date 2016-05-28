import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Block } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ngu-block-filter',
  template: require('./block-filter.component.html')
})
export class BlockFilterComponent implements OnInit {
  @Output() update = new EventEmitter();
  
  selectedFilter: string;

  constructor() {}

  ngOnInit() {
    this.update.emit('');
    this.selectedFilter = '';
  }

  changeFilter(status: string) {
    this.selectedFilter = status;
    this.update.emit(status);
  } 
}
