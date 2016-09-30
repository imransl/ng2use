import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BlocksModule } from './blocks';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header';
import { FooterComponent } from './shared/footer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BlocksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
