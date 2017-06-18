import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Attribute } from './model/attribute.model';
import { AttributeInputComponent } from './attribute-input/attribute-input.component'
import { categoryList } from './constants/category-list';
import { AttributesService } from '../shared/attributes.service';

@Component({
  selector: 'app-object-form',
  templateUrl: './object-form.component.html',
  styleUrls: ['./object-form.component.css']
})
export class ObjectFormComponent implements OnInit {

  categories = categoryList;
  mainForm: FormGroup;

  constructor(
    public AttributesService: AttributesService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      attributes: this.formBuilder.array([])
    });
    this.mainForm.valueChanges.subscribe(state => {
      // console.log('form changed', JSON.stringify(state.attributes, null, 2));
      this.AttributesService.updateOutput(state.attributes);
    });
  }

  addAttribute(category) {
    (<FormArray>this.mainForm.controls.attributes).push(
      AttributeInputComponent.buildAttributeForm(new Attribute, category.label)
    );
  }
}
