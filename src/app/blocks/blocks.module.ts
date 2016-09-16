import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksComponent } from './blocks.component';
import { BlockSearchComponent } from './block-search';
import { BlockFilterComponent } from './block-filter';
import { BlockListComponent } from './block-list';

import { BlockService } from './shared';

import { BlockFilterPipe } from './shared';
import { BlockSearchPipe } from './shared';

@NgModule({
  declarations: [
    BlocksComponent,
    BlockSearchComponent,
    BlockFilterComponent,
    BlockListComponent,
    BlockFilterPipe,
    BlockSearchPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    BlockService
  ]
})
export class BlocksModule { }
