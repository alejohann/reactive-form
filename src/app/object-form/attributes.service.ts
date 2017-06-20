import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

import { Attribute } from '../shared/models/attribute.model';

@Injectable()
export class AttributesService {

  attributesList = new FormArray([]);
  private updatedFormSource = new Subject<Attribute[]>();
  updatedForm = this.updatedFormSource.asObservable();

  constructor() { }

  getAttributes() {
    return this.attributesList;
  }

  removeAttribute(index) {
    this.attributesList.removeAt(index);
  }

  addAttribute(attribute) {
    this.attributesList.push(attribute);
  }

  addEnumeration(index, label) {
    (<Attribute>this.attributesList.at(index).value).enumerations.push(label);
  }

  updateOutput(updatedAttributes) {
    this.updatedFormSource.next(updatedAttributes);
  }

}
