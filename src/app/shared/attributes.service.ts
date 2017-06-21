import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

import { Attribute } from './models/attribute.model';
import { CustomValidators } from '../object-form/validators/form.validator';

@Injectable()
export class AttributesService {

  attributesList = new FormArray([]);
  private updatedFormSource = new Subject<Attribute[]>();
  updatedForm = this.updatedFormSource.asObservable();

  constructor(private attributeFormBuilder: FormBuilder) { }

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
      {validator: CustomValidators.validateRange}
    );
  }

  private validateName(nameControl) {
    let duplicates = 0;
    const attributesArray = this.getAttributes();
    if (attributesArray.value) {
      duplicates = attributesArray.value.filter(function(item) {
        return item.name === nameControl.value;
      }).length;
    }
    return duplicates === 0 ? null : {
      validateName : {
        errors: true
      }
    }
  }

  addAttribute(category) {
    this.attributesList.push(this.buildAttributeForm(category));
  }

  addEnumeration(index, label) {
    (<Attribute>this.attributesList.at(index).value).enumerations.push(label);
  }

  getAttributes() {
    return this.attributesList;
  }

  removeEnumeration(attrIndex, enumIndex) {
    (<Attribute>this.attributesList.at(attrIndex).value).enumerations.splice(enumIndex, 1);
  }

  removeAttribute(attribute) {
    this.attributesList.removeAt(this.getAttributes().value.indexOf(attribute));
  }

  updateOutput(updatedAttributes) {
    this.updatedFormSource.next(updatedAttributes);
  }

}
