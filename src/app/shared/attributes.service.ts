import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Attribute } from '../object-form/model/attribute.model';

@Injectable()
export class AttributesService {

  private updatedFormSource = new Subject<Attribute[]>();
  updatedForm = this.updatedFormSource.asObservable();

  constructor() { }

  updateOutput(updatedAttributes) {
    this.updatedFormSource.next(updatedAttributes);
  }

}
