import { Component, Input } from '@angular/core';
import { IFormControlDefinition } from '../../modelinterfaces/IFormControlDefinition';

@Component({
  selector: 'formcontrol-validation',
  templateUrl: 'formcontrol-validation.html'
})
export class FormcontrolValidation {

  @Input() definition: IFormControlDefinition;

  constructor() {
  }

  displayValidationMessages() {

    if ((this.definition.formControlItem.dirty || this.definition.submitAttemptMade) && !this.definition.formControlItem.valid) {
      return true;
    }
    return false;
  }

  getListOfErrors() {

    var errors: string[] = [];

    Object.keys(this.definition.formControlItem.errors).forEach(errDescription => {

      switch (errDescription) {
        case 'required':
          errors.push(`This is a required field`)
          break;
        case 'maxlength':
          errors.push(`Maximum length: ${this.definition.formControlItem.errors.maxlength.requiredLength} - currently ${this.definition.formControlItem.errors.maxlength.actualLength}`);
          break;
        case 'minlength':
          errors.push(`Minimum length: ${this.definition.formControlItem.errors.minlength.requiredLength} - currently ${this.definition.formControlItem.errors.minlength.actualLength}`);
          break;
        case 'email':
          errors.push('Require a valid email address');
          break;
      }

    });

    return errors;
  }


}
