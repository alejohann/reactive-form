export class Attribute {
  name: String = '';
  description: String = '';
  category: String = '';
  dataType: String = 'STRING';
  format: String = 'NONE';
  defaultValue: String = 'Disabled';
  minRange: Number = null;
  maxRange: Number = null;
  unitOfMeasure: Number = null;
  precision: Number = null;
  accuracy: Number = null;
  enumerations: String[] = [];
};
