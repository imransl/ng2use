import { Component, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'ngu-header',
  template: require('./header.component.html')
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
