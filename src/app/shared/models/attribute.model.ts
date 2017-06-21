export class Attribute {
  name: String = '';
  description: String = '';
  category: String = '';
  dataType: String = 'STRING';
  format: String = 'NONE';
  deviceResourceType: String = 'Disabled';
  defaultValue: String = '';
  minRange: Number = null;
  maxRange: Number = null;
  unitOfMeasurement: String = 'mm';
  precision: Number = null;
  accuracy: Number = null;
  enumerations: String[] = [];
};
