import { ModalController } from 'ionic-angular';
import { ModalService } from './../../providers/modal-service';
import { EmailDistributionManualRecipientFormModel } from './../../formmodels/emaildistribution-manualrecipient-formmodel';
import { FormGroup } from '@angular/forms';
import { IFormArray, IForm } from './../../modelinterfaces/base';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'email-distribution-editor-manual-recipients',
  templateUrl: 'email-distribution-editor-manual-recipients.html'
})
export class EmailDistributionEditorManualRecipients {

  @Input() formArray: IFormArray<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionManualRecipientDto>;
  @Input() submitAttemptMade: boolean;

  filtered() {
    let items = this.formArray.formArray.controls.filter(c => !((c as FormGroup).controls['deleted'].value));
    return items;
  }

  constructor(
    private emailDistributionManualRecipientFormModel: EmailDistributionManualRecipientFormModel,
    private modalService: ModalService,
    private modalController: ModalController
  ) {
  }

  async add() {
    let newItem = this.emailDistributionManualRecipientFormModel.getNewRowItem();
    await this.editItemDisplay(newItem);
    if (!newItem.form.invalid) {
      this.emailDistributionManualRecipientFormModel.addRowItem(this.formArray, newItem);
    }
  }

  remove(item: FormGroup) {
    this.modalService.confirm({
      title: 'Confirm Deletion',
      body: `Confirm deletion ${item.controls['emailAddress'].value !== null ? ' of ' + item.controls['emailAddress'].value : ''}`,
      confirmCallback: () => {
        this.emailDistributionManualRecipientFormModel.softOrHardDeleteFromArray(this.formArray, item);
      }
    });
  }

  async editItem(item: FormGroup) {
    var iform = this.emailDistributionManualRecipientFormModel.getItemFromArray(this.formArray, item);
    await this.editItemDisplay(iform);
  }

  private async editItemDisplay(item: IForm<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionManualRecipientDto>) {
    await this.modalService.customEmailDistributionEditorManualRecipientEdit(item);
  }

}
