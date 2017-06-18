import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dataTypesList } from '../constants/data-types';
import { formatsList } from '../constants/formats';

@Component({
  selector: 'app-attribute-input',
  templateUrl: './attribute-input.component.html',
  styleUrls: ['./attribute-input.component.css']
})

export class AttributeInputComponent {

  @Input() attributeForm: FormGroup;
  dataTypes: Array<Object> = dataTypesList;
  formats: Array<Object> = formatsList;

  static buildAttributeForm(attribute, category) {
    return new FormGroup({
      name: new FormControl(attribute.name, Validators.required),
      description: new FormControl(attribute.description),
      category: new FormControl(category, Validators.required),
      dataType: new FormControl(attribute.dataType, Validators.required),
      format: new FormControl(attribute.format, Validators.required),
      defaultValue: new FormControl({value: attribute.defaultValue, disabled: 'true'}),
      rangeMin: new FormControl(attribute.rangeMin),
      rangeMax: new FormControl(attribute.rangeMax),
      unitOfMeasure: new FormControl(attribute.unitOfMeasure),
      precision: new FormControl(attribute.precision),
      accuracy: new FormControl(attribute.accuracy),
      enumerations: new FormControl(attribute.enumerations)
    });
  }

}
