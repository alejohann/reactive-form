import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { categoryList } from '../shared/constants/category-list';
import { AttributesService } from '../shared/attributes.service';
import { CustomValidators } from '../object-form/validators/form.validator';

@Component({
  selector: 'app-object-form',
  templateUrl: './object-form.component.html',
  styleUrls: ['./object-form.component.css']
})
export class ObjectFormComponent implements OnInit {

  attributesFormArray: FormArray;
  categories: Array<Object>;
  mainForm: FormGroup;

  constructor(
    private attributesService: AttributesService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.attributesFormArray = this.attributesService.getAttributes();
    this.categories = categoryList;
    this.mainForm = this.formBuilder.group({
      attributes: this.attributesFormArray
    });
    this.mainForm.valueChanges.subscribe(state => {
      this.attributesService.updateOutput(state.attributes);
    });
  }

  addAttribute(category) {
    this.attributesService.addAttribute(category.label);
  }

}
