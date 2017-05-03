import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'formcontrol-text',
  templateUrl: 'formcontrol-text.html'
})
export class FormcontrolText {

  @Input() title: string;
  @Input() formControlItem: FormControl;

  constructor() {
  }


  //THIS EVENT DOES HIT
  ngOnInit() {
    console.log('hit here');
  }

}
