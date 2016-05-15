import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ngu-block-filter',
  templateUrl: 'block-filter.component.html'
})
export class BlockFilterComponent implements OnInit {
  @Output() update = new EventEmitter();
  selectedFilter: string;

  constructor() {}

  ngOnInit() {
    this.update.emit('');
    this.selectedFilter = '';
  }

  changeFilter(type) {
    this.selectedFilter = type;
    this.update.emit(type);
  } 
}
