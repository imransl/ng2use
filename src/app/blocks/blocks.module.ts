import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksComponent } from './blocks.component';
import { BlockCategoryComponent } from './block-category';
import { BlockDetailsComponent } from './block-details';
import { BlockFilterComponent } from './block-filter';
import { BlockListComponent } from './block-list';
import { BlockSearchComponent } from './block-search';

import { BlockFilterPipe } from './shared';
import { BlockSearchPipe } from './shared';

import { BlockService } from './shared';

@NgModule({
  declarations: [
    BlocksComponent,
    BlockCategoryComponent,
    BlockDetailsComponent,
    BlockFilterComponent,
    BlockListComponent,
    BlockSearchComponent,

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
