import { Component, OnInit } from '@angular/core';

import { Attribute } from '../object-form/model/attribute.model';
import { AttributesService } from '../shared/attributes.service';

@Component({
  selector: 'app-object-output',
  templateUrl: './object-output.component.html',
  styleUrls: ['./object-output.component.css']
})
export class ObjectOutputComponent implements OnInit {

  attributesList: Array<Attribute> = [];

  constructor(public AttributesService: AttributesService) { }

  ngOnInit() {
    this.AttributesService.updatedForm.subscribe(listFromService => {
      this.attributesList = listFromService;
    });
  }

}
