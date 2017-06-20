import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { dataTypesList } from '../../shared/constants/data-types';
import { formatsList } from '../../shared/constants/formats';
import { AttributesService } from '../attributes.service';

@Component({
  selector: 'app-attribute-input',
  templateUrl: './attribute-input.component.html',
  styleUrls: ['./attribute-input.component.css']
})

export class AttributeInputComponent {

  @Input() attributeForm: FormGroup;
  @Input() attrIndex: number;
  dataTypes: Array<Object> = dataTypesList;
  formats: Array<Object> = formatsList;

  constructor(private AttributesService: AttributesService) { }

  removeAttribute() {
    this.AttributesService.removeAttribute(this.attrIndex);
  }
}
