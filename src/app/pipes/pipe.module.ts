import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { FilterCategoryPipe } from './matches-category.pipe';

@NgModule({
  declarations: [FilterCategoryPipe],
  imports: [CommonModule],
  exports: [FilterCategoryPipe]
})

export class PipeModule {
  static forRoot() {
    return {
        ngModule: PipeModule,
        providers: [],
    };
  }
};
