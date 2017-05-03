import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello FormcontrolRichtext Component');
    this.text = 'Hello World';
  }

}
