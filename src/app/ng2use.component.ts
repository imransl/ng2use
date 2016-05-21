import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { HeaderComponent } from './shared/header';
import { FooterComponent } from './shared/footer';
import { BlocksComponent } from './blocks';

@Component({
  moduleId: module.id,
  selector: 'ng2use-app',
  templateUrl: 'ng2use.component.html',
  directives: [HeaderComponent, FooterComponent, BlocksComponent],
  providers: [HTTP_PROVIDERS]
})
export class Ng2useAppComponent {
}
