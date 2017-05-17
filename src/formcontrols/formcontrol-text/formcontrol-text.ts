import { Component, Input } from '@angular/core';
import { IFormControlDefinition } from '../../modelinterfaces/base';
import { StringHelper } from "../../helpers/string-helper";

@Component({
  selector: 'formcontrol-text',
  templateUrl: 'formcontrol-text.html'
})
export class FormcontrolText {

  @Input() definition: IFormControlDefinition;

  constructor() {
  }

  getType() {
    if (StringHelper.contains(this.definition.title, 'email')) {
      return 'email';
    }

    let phoneTypes = ['telephone', 'mobile'];

    if (phoneTypes.some(pt => StringHelper.contains(this.definition.title, pt))) {
      return 'tel';
    }

    return 'text';
  }

  //THIS EVENT DOES HIT
  ngOnInit() {
  }

}
