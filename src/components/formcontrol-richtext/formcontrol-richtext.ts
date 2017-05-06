import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { IFormControlDefinition } from '../../modelinterfaces/base';
import { StringHelper } from '../../helpers/string-helper';

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
  @ViewChild('decorate') decorate: ElementRef;

  @Input() definition: IFormControlDefinition;

  constructor() {

  }

  private wireupResize() {

    let element = this.editor.nativeElement as HTMLDivElement;

    let height = (window.innerHeight || document.body.clientHeight) - 250;
    let textareaHeight = Math.round((height / 100.00) * 45);
    element.style.height = `${textareaHeight}px`;

  }

  private updateItem() {
    let element = this.editor.nativeElement as HTMLDivElement;
    element.innerHTML = this.definition.formControlItem.value;

    if (StringHelper.isNullOrWhiteSpace(element.innerHTML)) {
      element.innerHTML = '<div></div>';
    }

    let updateItem = () => {
      let sanitizedHtml = element.innerHTML;//= element.innerHTML.replace(/<(\/?|\!?)(DOCTYPE html|html|head|body|div)>/g, "");
      this.definition.formControlItem.setValue(sanitizedHtml);
    };

    element.onchange = () => updateItem();
    element.onkeyup = () => updateItem();
    element.onpaste = () => updateItem();
    element.oninput = () => updateItem();


  }

  private wireupButtons() {
    let buttons = (this.decorate.nativeElement as HTMLDivElement).getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];

      let command = button.getAttribute('data-command');

      if (StringHelper.contains(command, '|')) {
        let parameter = command.split('|')[1];
        command = command.split('|')[0];

        button.addEventListener('click', () => {
          document.execCommand(command, false, parameter);
        });
      } else {
        button.addEventListener('click', () => {
          document.execCommand(command);
        });
      }
    }

  }

  ngAfterContentInit() {
    this.wireupResize();
    this.updateItem();
    this.wireupButtons();
  }


}
