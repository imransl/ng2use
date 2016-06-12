import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ngu-block-filter',
  templateUrl: 'app/blocks/block-filter/block-filter.component.html'
})
export class BlockFilterComponent implements OnInit {
  @Output() update = new EventEmitter();

  selectedFilter: string;

  constructor() { }

  ngOnInit() {
    this.update.emit('');
    this.selectedFilter = '';
  }

  changeFilter(status: string) {
    this.selectedFilter = status;
    this.update.emit(status);
  }
}
