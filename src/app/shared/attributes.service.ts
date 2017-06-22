import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

import { Attribute } from './models/attribute.model';
import { CustomValidators } from '../object-form/validators/form.validator';

@Injectable()
export class AttributesService {

  private updatedFormSource = new Subject<Attribute[]>();
  attributesList = new FormArray([]);
  updatedForm = this.updatedFormSource.asObservable();

  constructor(private attributeFormBuilder: FormBuilder, private formValidator: CustomValidators) { }

  private buildAttributeForm (category) {
    const attribute = new Attribute;
    return this.attributeFormBuilder.group({
      name: new FormControl(attribute.name, [Validators.required, this.validateName.bind(this)]),
      description: new FormControl(attribute.description),
      category: new FormControl(category, Validators.required),
      dataType: new FormControl(attribute.dataType, Validators.required),
      format: new FormControl(attribute.format, Validators.required),
      deviceResourceType: new FormControl({value: attribute.deviceResourceType, disabled: true}),
      defaultValue: new FormControl(attribute.defaultValue),
      minRange: new FormControl(attribute.minRange),
      maxRange: new FormControl(attribute.maxRange),
      unitOfMeasurement: new FormControl(attribute.unitOfMeasurement),
      precision: new FormControl(attribute.precision),
      accuracy: new FormControl(attribute.accuracy),
      enumerations: new FormControl(attribute.enumerations)
    },
      {validator:
        Validators.compose([
          this.formValidator.validateRange,
          this.formValidator.validatePrecision,
          this.formValidator.validateAccuracy
        ])
      }
    );
  }

  addAttribute(category) {
    this.attributesList.push(this.buildAttributeForm(category));
  }

  addEnumeration(attribute, label) {
    (<Attribute>this.attributesList.at(this.getAttributeIndex(attribute)).value).enumerations.push(label);
  }

  getAttributeIndex(attribute) {
    return this.getAttributes().value.indexOf(attribute);
  }

  getAttributes() {
    return this.attributesList;
  }

  removeAttribute(attribute) {
    this.attributesList.removeAt(this.getAttributeIndex(attribute));
  }

  removeEnumeration(attribute, enumIndex) {
    (<Attribute>this.attributesList.at(this.getAttributeIndex(attribute)).value).enumerations.splice(enumIndex, 1);
  }

  updateOutput(updatedAttributes) {
    this.updatedFormSource.next(updatedAttributes);
  }

  validateName(nameControl) {
    let duplicates = 0;
    if (nameControl.value) {
      duplicates = this.attributesList.value.filter(function(item) {
        return item.name === nameControl.value;
      }).length;
    }
    return duplicates === 0 ? null : {
      validateName : {
        errors: true
      }
    }
  }

}
