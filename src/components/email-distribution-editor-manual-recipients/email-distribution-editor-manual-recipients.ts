import { ModalService } from './../../providers/modal-service';
import { EmailDistributionManualRecipientFormModel } from './../../formmodels/emaildistribution-manualrecipient-formmodel';
import { FormControl, FormGroup } from '@angular/forms';
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

  filtered() {
    let items = this.formArrayDefinition.formArray.controls.filter(c => !((c as FormGroup).controls['deleted'].value));
    return items;
  }

  constructor(
    private emailDistributionManualRecipientFormModel: EmailDistributionManualRecipientFormModel,
    private modalService: ModalService
  ) {
  }

  add() {
    this.emailDistributionManualRecipientFormModel.addNewRow(this.formArrayDefinition);
  }

  remove(item: FormGroup) {
    this.modalService.confirm({
      title: 'Confirm Deletion',
      body: `Confirm deletion ${item.controls['emailAddress'].value !== null ? ' of ' + item.controls['emailAddress'].value : ''}`,
      confirmCallback: () => {
        this.emailDistributionManualRecipientFormModel.softOrHardDeleteFromArray(this.formArrayDefinition, item);
      }
    });
  }

  createFormControlDefinition(title: string, formControlItem: FormControl) {
    return <IFormControlDefinition>{
      title: title,
      formControlItem: formControlItem,
      submitAttemptMade: this.formArrayDefinition.submitAttemptMade
    };
  }



}
