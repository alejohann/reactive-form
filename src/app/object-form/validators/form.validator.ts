import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  validateRange(attrControl: AbstractControl) {
    const minRangeControl = attrControl.get('minRange');
    const maxRangeControl = attrControl.get('maxRange');
    const precisionControl = attrControl.get('precision');
    const accuracyControl = attrControl.get('accuracy');
    if (minRangeControl.value !== null && maxRangeControl.value !== null) {
      if (minRangeControl.value >= maxRangeControl.value) {
        minRangeControl.markAsTouched();
        minRangeControl.setErrors({validateRange: true});
        maxRangeControl.markAsTouched();
        maxRangeControl.setErrors({validateRange: true});
      } else {
        minRangeControl.markAsUntouched();
        maxRangeControl.markAsUntouched();
        return null
      }
    }
  }

  validatePrecision(attrControl: AbstractControl) {
    const minRangeControl = attrControl.get('minRange');
    const maxRangeControl = attrControl.get('maxRange');
    const precisionControl = attrControl.get('precision');
    if (precisionControl.value && (maxRangeControl.value - minRangeControl.value) % precisionControl.value !== 0) {
      precisionControl.setErrors({validatePrecision: true});
    } else {
      return null
    }
  }

  validateAccuracy(attrControl: AbstractControl) {
    const minRangeControl = attrControl.get('minRange');
    const maxRangeControl = attrControl.get('maxRange');
    const accuracyControl = attrControl.get('accuracy');
    if (accuracyControl.value && (maxRangeControl.value - minRangeControl.value) % accuracyControl.value !== 0) {
      accuracyControl.setErrors({validateAccuracy: true});
    } else {
      return null
    }
  }

}
