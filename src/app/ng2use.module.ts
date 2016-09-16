import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BlocksModule } from './blocks';

import { Ng2useAppComponent } from './ng2use.component';
import { HeaderComponent } from './shared/header';
import { FooterComponent } from './shared/footer';
import { BlocksComponent } from './blocks';

@NgModule({
  declarations: [
    Ng2useAppComponent,
    HeaderComponent,
    FooterComponent,
    BlocksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BlocksModule
  ],
  providers: [],
  bootstrap: [Ng2useAppComponent]
})
export class Ng2useAppModule { }
