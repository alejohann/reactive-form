export class CustomValidators {
  static validateRange(attrControl) {
    const minRangeControl = attrControl.get('minRange');
    const maxRangeControl = attrControl.get('maxRange');
    if (minRangeControl.value !== null && maxRangeControl.value !== null) {
      if (minRangeControl.value >= maxRangeControl.value) {
        minRangeControl.setErrors({validateRange: true});
        maxRangeControl.setErrors({validateRange: true});
        minRangeControl.markAsTouched();
        maxRangeControl.markAsTouched();
      } else {
        const precisionControl = attrControl.get('precision');
        const accuracyControl = attrControl.get('accuracy');
        if (precisionControl.value !== null || accuracyControl.value !== null) {
          if (precisionControl.value !== null) {
            if ((maxRangeControl.value - minRangeControl.value) % precisionControl.value !== 0) {
              precisionControl.setErrors({validatePrecision: true});
            }
          }
          if (accuracyControl.value !== null) {
            if ((maxRangeControl.value - minRangeControl.value) % accuracyControl.value !== 0) {
              accuracyControl.setErrors({validatePrecision: true});
            }
          }
        } else {
          minRangeControl.markAsUntouched();
          maxRangeControl.markAsUntouched();
          return null
        }
      }
    }
  }
}
