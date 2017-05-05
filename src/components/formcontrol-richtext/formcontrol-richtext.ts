import { Component, Input } from '@angular/core';
import { IFormControlDefinition } from '../../modelinterfaces/base';

/**
 * Generated class for the FormcontrolRichtext component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'formcontrol-richtext',
  templateUrl: 'formcontrol-richtext.html'
})
export class FormcontrolRichtext {

  @Input() definition: IFormControlDefinition;

  constructor() {

  }

}
