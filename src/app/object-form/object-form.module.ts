import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdTabsModule,
  MdInputModule,
  MdSelectModule,
  MdOptionModule,
  MdChipsModule,
  MdIconModule } from '@angular/material';

import { ObjectFormComponent } from './object-form.component';
import { AttributeInputComponent } from './attribute-input/attribute-input.component';
import { AttributesService } from './attributes.service';

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
    MdChipsModule,
    MdIconModule,
    SharedModule.forRoot()
  ],
  declarations: [ObjectFormComponent, AttributeInputComponent],
  exports: [ObjectFormComponent, AttributeInputComponent],
  providers: [AttributesService]
})

export class ObjectFormModule { }
