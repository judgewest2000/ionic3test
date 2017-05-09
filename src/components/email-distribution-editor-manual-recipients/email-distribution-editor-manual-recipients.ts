import { FormControl, FormArray } from '@angular/forms';
import { IFormControlDefinition, IFormArrayDefinition } from './../../modelinterfaces/base';
import { Component, Input } from '@angular/core';


/**
 * Generated class for the EmailDistributionEditorManualRecipients component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'email-distribution-editor-manual-recipients',
  templateUrl: 'email-distribution-editor-manual-recipients.html'
})
export class EmailDistributionEditorManualRecipients {

  @Input() formArrayDefinition: IFormArrayDefinition<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionManualRecipientDto>;

  constructor() {
  }

  add() {
    //let newForm = this.emailDistributionManualRecipientFormChildModel.getForm();
    //this.data.controls.push(newForm);
  }

  remove() {

  }

  clickme() {
    
  }


  createFormControlDefinition(title: string, formControlItem: FormControl) {
    return <IFormControlDefinition>{
      title: title,
      formControlItem: formControlItem,
      submitAttemptMade: this.formArrayDefinition.submitAttemptMade
    };
  }



}
