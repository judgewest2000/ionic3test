import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'formcontrol-validation',
  templateUrl: 'formcontrol-validation.html'
})
export class FormcontrolValidation {

  @Input() formControlItem: FormControl;

  constructor() {
  }

  displayValidationMessages() {

    if (this.formControlItem.invalid && this.formControlItem.dirty) {
      console.log('invalid');
      return true;
    }
    return false;
  }

  getListOfErrors() {

    if (!this.formControlItem.touched) {
      return [];
    }

    var errors: string[] = [];

    Object.keys(this.formControlItem.errors).forEach(errDescription => {

      switch (errDescription) {
        case 'required':
          errors.push(`This is a required field`)
          break;
        case 'maxlength':
          errors.push(`Maximum length: ${this.formControlItem.errors.maxlength.requiredLength} - currently ${this.formControlItem.errors.maxlength.actualLength}`);
          break;
        case 'minlength':
          errors.push(`Minimum length: ${this.formControlItem.errors.minlength.requiredLength} - currently ${this.formControlItem.errors.minlength.actualLength}`);
          break;
        case 'email':
          errors.push('Require a valid email address');
          break;
      }

    });

    return errors;
  }


}
