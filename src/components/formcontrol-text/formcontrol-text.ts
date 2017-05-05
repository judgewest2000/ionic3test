import { Component, Input } from '@angular/core';
import { IFormControlDefinition } from '../../modelinterfaces/IFormControlDefinition';

@Component({
  selector: 'formcontrol-text',
  templateUrl: 'formcontrol-text.html'
})
export class FormcontrolText {

  @Input() definition: IFormControlDefinition;

  constructor() {
  }


  //THIS EVENT DOES HIT
  ngOnInit() {
  }

}
