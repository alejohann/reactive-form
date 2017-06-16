import { Component, OnInit } from '@angular/core';
import { Attribute } from './model/attribute.model';
import { categoryList } from './constants/category-list';

@Component({
  selector: 'app-object-form',
  templateUrl: './object-form.component.html',
  styleUrls: ['./object-form.component.css']
})
export class ObjectFormComponent implements OnInit {

  categories = categoryList;
  attributesList: Array<Attribute> = [];

  constructor() { }

  ngOnInit() {
  }

  addAttribute(category) {
    this.attributesList.push(Object.assign(new Attribute, {category: category.label}));
  }

}
