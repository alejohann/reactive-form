import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { dataTypesList } from '../../shared/constants/data-types';
import { formatsList } from '../../shared/constants/formats';
import { AttributesService } from '../attributes.service';

@Component({
  selector: 'app-attribute-input',
  templateUrl: './attribute-input.component.html',
  styleUrls: ['./attribute-input.component.css']
})

export class AttributeInputComponent {

  @Input() attributeForm: FormGroup;
  @Input() attrIndex: number;
  enumerationsForm: FormGroup;
  dataTypes: Array<Object> = dataTypesList;
  formats: Array<Object> = formatsList;

  constructor(private AttributesService: AttributesService, private enumerationsFormBuilder: FormBuilder) {
    this.buildEnumerationsForm();
  }

  buildEnumerationsForm() {
    this.enumerationsForm = this.enumerationsFormBuilder.group({
      enumerationLabel: ''
    })
  }

  addEnumeration() {
    this.AttributesService.addEnumeration(
      this.attrIndex,
      this.enumerationsForm.get('enumerationLabel').value
    );
    this.enumerationsForm.get('enumerationLabel').setValue('');
  }

  removeEnumeration(index) {
    this.AttributesService.removeEnumeration(this.attrIndex);
  }

  removeAttribute() {
    this.AttributesService.removeAttribute(this.attrIndex);
  }
}
