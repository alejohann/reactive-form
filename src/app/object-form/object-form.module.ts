import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdTabsModule, MdInputModule, MdSelectModule, MdOptionModule } from '@angular/material';

import { ObjectFormComponent } from './object-form.component';
import { AttributeInputComponent } from './attribute-input/attribute-input.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdTabsModule,
    MdInputModule,
    MdSelectModule,
    MdOptionModule,
    SharedModule.forRoot()
  ],
  declarations: [ObjectFormComponent, AttributeInputComponent],
  exports: [ObjectFormComponent, AttributeInputComponent],
  providers: []
})

export class ObjectFormModule { }
