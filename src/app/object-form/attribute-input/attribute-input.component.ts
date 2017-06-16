import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../model/attribute.model';

@Component({
  selector: 'app-attribute-input',
  templateUrl: './attribute-input.component.html',
  styleUrls: ['./attribute-input.component.css']
})

export class AttributeInputComponent implements OnInit {

  @Input() attribute: Attribute;

  constructor() { }

  ngOnInit() {
  }

  matchesCategory(category) {
    return this.attribute.category === category;
  }

}
