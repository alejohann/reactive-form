import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { dataTypesList } from '../../shared/constants/data-types';
import { formatsList } from '../../shared/constants/formats';
import { AttributesService } from '../../shared/attributes.service';

@Component({
  selector: 'app-attribute-input',
  templateUrl: './attribute-input.component.html',
  styleUrls: ['./attribute-input.component.css']
})

export class AttributeInputComponent implements OnInit {

  @Input() attributeForm: FormGroup;
  @Input() attrIndex: number;
  enumerationsForm: FormGroup;
  dataTypes: Array<Object> = dataTypesList;
  formats: Array<Object> = formatsList;

  constructor(
    private attributesService: AttributesService,
    private groupBuilder: FormBuilder) {
    this.buildEnumerationsForm();
  }

  ngOnInit() {
    this.attributeForm.valueChanges.debounceTime(50).subscribe(state => {
      this.attributeForm.updateValueAndValidity();
    });
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
      if (state === 'NUMBER') {
        this.attributeForm.get('minRange').setValidators([Validators.required]);
        this.attributeForm.get('maxRange').setValidators([Validators.required]);
      } else {
        this.attributeForm.get('minRange').clearValidators();
        this.attributeForm.get('maxRange').clearValidators();
      }
    });
  }

  private buildEnumerationsForm() {
    this.enumerationsForm = this.groupBuilder.group({
      enumerationLabel: ''
    })
  }

  addEnumeration() {
    this.attributesService.addEnumeration(
      this.attributeForm.value,
      this.enumerationsForm.get('enumerationLabel').value
    );
    this.enumerationsForm.get('enumerationLabel').reset();
  }

  removeEnumeration(index) {
    this.attributesService.removeEnumeration(this.attributeForm.value, index);
  }

  removeAttribute() {
    this.attributesService.removeAttribute(this.attributeForm.value);
  }

}
