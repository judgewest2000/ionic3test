import { StringHelper } from '../../helpers/string-helper';

import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


/**
 * Generated class for the FormcontrolDate component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'formcontrol-date',
  templateUrl: 'formcontrol-date.html'
})
export class FormcontrolDate {

  @Input() title: string;
  @Input() formControlItem: FormControl;
  @Input() showTime: string;

  getPickerFormat() {
    let format = 'DD MMM YYYY';
    
    if (StringHelper.isNotNullOrWhiteSpace(this.showTime) &&
      StringHelper.isTrue(this.showTime)) {
      format += ' HH mm';
    }

    return format;
  }

  constructor() {
  }

}
