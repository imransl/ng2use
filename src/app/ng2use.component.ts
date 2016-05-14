import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header';
import { FooterComponent } from './shared/footer';

@Component({
  moduleId: module.id,
  selector: 'ng2use-app',
  templateUrl: 'ng2use.component.html',
  directives: [HeaderComponent, FooterComponent]
})
export class Ng2useAppComponent {
  title = 'NG2USE';
}
