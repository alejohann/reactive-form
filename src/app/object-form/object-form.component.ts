import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Attribute } from '../shared/models/attribute.model';
import { AttributeInputComponent } from './attribute-input/attribute-input.component'
import { categoryList } from '../shared/constants/category-list';
import { AttributesService } from './attributes.service';

@Component({
  selector: 'app-object-form',
  templateUrl: './object-form.component.html',
  styleUrls: ['./object-form.component.css']
})
export class ObjectFormComponent implements OnInit, Validators {

  categories: Array<Object>;
  attributesFormArray: FormArray;
  mainForm: FormGroup;

  constructor(
    private attributesService: AttributesService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.categories = categoryList;
    this.attributesFormArray = this.attributesService.getAttributes();
    this.mainForm = this.formBuilder.group({
      attributes: this.attributesFormArray
    });
    this.mainForm.valueChanges.subscribe(state => {
      this.attributesService.updateOutput(state.attributes)
    });
  }

  buildAttributeForm(category) {
    const attribute = new Attribute;
    return new FormGroup({
      name: new FormControl(attribute.name, [Validators.required, this.validateName.bind(this)]),
      description: new FormControl(attribute.description),
      category: new FormControl(category, Validators.required),
      dataType: new FormControl(attribute.dataType, Validators.required),
      format: new FormControl(attribute.format, Validators.required),
      deviceResourceType: new FormControl({value: attribute.deviceResourceType, disabled: true}),
      defaultValue: new FormControl(attribute.defaultValue),
      minRange: new FormControl(attribute.minRange),
      maxRange: new FormControl(attribute.maxRange),
      unitOfMeasure: new FormControl(attribute.unitOfMeasure),
      precision: new FormControl(attribute.precision),
      accuracy: new FormControl(attribute.accuracy),
      enumerations: new FormControl(attribute.enumerations)
    });
  }

  addAttribute(category) {
    this.attributesService.addAttribute(this.buildAttributeForm(category.label));
  }

  public validateName(nameControl) {
    let duplicates = 0;
    if (this.attributesFormArray.value) {
      duplicates = this.attributesFormArray.value.filter(function(item) {
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
