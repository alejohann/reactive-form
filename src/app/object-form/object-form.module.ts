import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdTabsModule } from '@angular/material';

import { ObjectFormComponent } from './object-form.component';
import { AttributeInputComponent } from './attribute-input/attribute-input.component';

import { PipeModule } from '../pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdTabsModule,
    PipeModule.forRoot()
  ],
  declarations: [ObjectFormComponent, AttributeInputComponent],
  exports: [ObjectFormComponent, AttributeInputComponent]
})
export class ObjectFormModule { }
