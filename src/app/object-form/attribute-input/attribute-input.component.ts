import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { dataTypesList } from '../../shared/constants/data-types';
import { formatsList } from '../../shared/constants/formats';
import { AttributesService } from '../../shared/attributes.service';
import { Enumeration } from '../../shared/models/enumeration.model';

@Component({
  selector: 'app-attribute-input',
  templateUrl: './attribute-input.component.html',
  styleUrls: ['./attribute-input.component.css']
})

export class AttributeInputComponent implements OnInit {

  @Input() attributeForm: FormGroup;
  enumerationsForm: FormGroup;
  dataTypes: Array<Object> = dataTypesList;
  formats: Array<Object> = formatsList;

  constructor(
    private attributesService: AttributesService,
    private groupBuilder: FormBuilder) {
    this.buildEnumerationsForm();
  }

  ngOnInit() {
    this.attributeForm.get('dataType').valueChanges.subscribe(state => {
      if (state === 'OBJECT' && this.attributeForm.get('format').enabled) {
        this.attributeForm.get('format').disable();
        this.attributeForm.get('defaultValue').disable();
      } else {
        this.attributeForm.get('format').enable();
        this.attributeForm.get('defaultValue').enable();
      }
    });
    this.attributeForm.get('format').valueChanges.debounceTime(100).subscribe(state => {
      if (state !== 'NONE' && this.attributeForm.get('enumerations').value.length) {
        this.attributeForm.get('enumerations').setValue([]);
      }
      if (state === 'NUMBER') {
        this.attributeForm.get('minRange').setValidators([Validators.required]);
        this.attributeForm.get('maxRange').setValidators([Validators.required]);
      } else {
        this.resetNumberFormatFields();
      }
    });
    this.attributeForm.get('minRange').statusChanges.debounceTime(100).subscribe(state => {
      this.attributeForm.get('maxRange').updateValueAndValidity();
    });
    this.attributeForm.get('maxRange').statusChanges.debounceTime(100).subscribe(state => {
      this.attributeForm.get('minRange').updateValueAndValidity();
    });
  }

  private buildEnumerationsForm() {
    this.enumerationsForm = this.groupBuilder.group({
      enumerationLabel: (new Enumeration).label
    })
  }

  private resetNumberFormatFields() {
    this.attributeForm.get('minRange').clearValidators();
    this.attributeForm.get('maxRange').clearValidators();
    this.attributeForm.get('minRange').reset();
    this.attributeForm.get('maxRange').reset();
    this.attributeForm.get('minRange').markAsUntouched();
    this.attributeForm.get('maxRange').markAsUntouched();
    this.attributeForm.get('precision').reset();
    this.attributeForm.get('accuracy').reset();
    this.attributeForm.get('unitOfMeasurement').setValue('mm');
  }

  addEnumeration() {
    this.attributesService.addEnumeration(
      this.attributeForm.value,
      this.enumerationsForm.get('enumerationLabel').value
    );
    this.enumerationsForm.get('enumerationLabel').reset();
  }

  removeAttribute() {
    this.attributesService.removeAttribute(this.attributeForm.value);
  }

  removeEnumeration(index) {
    this.attributesService.removeEnumeration(this.attributeForm.value, index);
  }

}
