export class Attribute {
  name: String = '';
  description: String = '';
  category: String = '';
  dataType: String = '';
  format: String = '';
  defaultValue: String = 'Disabled';
  minRange: Number = null;
  maxRange: Number = null;
  uom: Number = null;
  precision: Number = null;
  accuracy: Number = null;
  enumerations: String[] = [];
};
