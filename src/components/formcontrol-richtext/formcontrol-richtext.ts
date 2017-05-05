import { Component, Input, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('editor') editor: ElementRef;

  @Input() definition: IFormControlDefinition;

  constructor() {

  }

  ngAfterContentInit() {
    let element = this.editor.nativeElement as HTMLDivElement;
    element.innerHTML = this.definition.formControlItem.value;

    let updateItem = () => {
      let sanitizedHtml = element.innerHTML.replace(/<(\/?|\!?)(DOCTYPE html|html|head|body|div)>/g, "");
      this.definition.formControlItem.setValue(sanitizedHtml);
    };

    element.onchange = () => updateItem();
    element.onkeyup = () => updateItem();
    element.onpaste = () => updateItem();
    element.oninput = () => updateItem();

  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AfterContentChecked');
  }

}
