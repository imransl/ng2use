import { Component, Output, EventEmitter, OnInit } from '@angular/core';

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

  changeFilter(type: string) {
    this.selectedFilter = type;
    this.update.emit(type);
  } 
}
