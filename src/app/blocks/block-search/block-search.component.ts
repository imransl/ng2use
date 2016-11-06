import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngu-block-search',
  templateUrl: './block-search.component.html'
})
export class BlockSearchComponent implements OnInit {
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  submitForm(event) {
    event.preventDefault();
  }

}
