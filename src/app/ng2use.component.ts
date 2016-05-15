import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { HeaderComponent } from './shared/header';
import { FooterComponent } from './shared/footer';
import { BlocksComponent } from './blocks';

@Component({
  moduleId: module.id,
  selector: 'ng2use-app',
  templateUrl: 'ng2use.component.html',
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent, BlocksComponent],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS]
})
export class Ng2useAppComponent {
  title = 'NG2USE';
}
