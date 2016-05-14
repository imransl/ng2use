import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Ng2useAppComponent, environment } from './app/';
import 'rxjs/Rx';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2useAppComponent);
