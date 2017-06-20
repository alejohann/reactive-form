import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterCategoryPipe } from './matches-category.pipe';

@NgModule({
  declarations: [FilterCategoryPipe],
  imports: [CommonModule],
  exports: [FilterCategoryPipe]
})

export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
};
