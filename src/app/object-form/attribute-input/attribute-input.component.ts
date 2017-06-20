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

export class AttributeInputComponent implements OnInit {

  @Input() attributeForm: FormGroup;
  @Input() attrIndex: number;
  disableControls = false;
  enumerationsForm: FormGroup;
  dataTypes: Array<Object> = dataTypesList;
  formats: Array<Object> = formatsList;

  constructor(private attributesService: AttributesService, private enumerationsFormBuilder: FormBuilder) {
    this.buildEnumerationsForm();
  }

  ngOnInit() {
    this.attributeForm.get('dataType').valueChanges.subscribe(state => {
      if (state === 'OBJECT' && this.attributeForm.get('defaultValue').enabled) {
        this.attributeForm.get('defaultValue').disable();
      } else {
        this.attributeForm.get('defaultValue').enable();
      }
      console.log('disable', this.disableControls);
    });
  }

  buildEnumerationsForm() {
    this.enumerationsForm = this.enumerationsFormBuilder.group({
      enumerationLabel: ''
    })
  }

  addEnumeration() {
    this.attributesService.addEnumeration(
      this.attrIndex,
      this.enumerationsForm.get('enumerationLabel').value
    );
    this.enumerationsForm.get('enumerationLabel').setValue('');
  }

  removeEnumeration(index) {
    this.attributesService.removeEnumeration(this.attrIndex);
  }

  removeAttribute() {
    this.attributesService.removeAttribute(this.attrIndex);
  }

}
