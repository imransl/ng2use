import { Component } from '@angular/core';
import { FooterComponent } from './footer';

@Component({
  moduleId: module.id,
  selector: 'ng2use-app',
  templateUrl: 'ng2use.component.html',
  directives: [FooterComponent]
})
export class Ng2useAppComponent {
  title = 'NG2USE';
}
