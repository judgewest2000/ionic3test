import { Component, Input } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'formcontrol-text',
  templateUrl: 'formcontrol-text.html'
})
export class FormcontrolText {

  @Input() form: FormGroup;
  @Input() title: string;
  @Input() fieldName: string;

  constructor() {
  }

  ngOnInit(){
    console.log('hit here');
  }

}
