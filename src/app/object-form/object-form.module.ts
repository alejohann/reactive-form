import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdChipsModule,
  MdIconModule,
  MdInputModule,
  MdOptionModule,
  MdSelectModule,
  MdTabsModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AttributeInputComponent } from './attribute-input/attribute-input.component';
import { AttributesService } from '../shared/attributes.service';
import { CustomValidators } from './validators/form.validator';
import { ObjectFormComponent } from './object-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdChipsModule,
    MdIconModule,
    MdInputModule,
    MdOptionModule,
    MdSelectModule,
    MdTabsModule,
    ReactiveFormsModule,
    SharedModule.forRoot()
  ],
  declarations: [ObjectFormComponent, AttributeInputComponent],
  exports: [ObjectFormComponent, AttributeInputComponent],
  providers: [AttributesService, CustomValidators]
})

export class ObjectFormModule { }
