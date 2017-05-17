import { DataAccessService } from './../../providers/data-access-service';
import { EmailDistributionContactFormModel } from './../../formmodels/emaildistribution-contact-formmodel';
import { FormGroup } from '@angular/forms';
import { IFormArray } from './../../modelinterfaces/base';
import { Component, Input } from '@angular/core';
import { ModalService } from "../../providers/modal-service";
import { StringHelper } from "../../helpers/string-helper";

/**
 * Generated class for the EmailDistributionEditorContactsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'email-distribution-editor-contacts',
  templateUrl: 'email-distribution-editor-contacts.html'
})
export class EmailDistributionEditorContactsComponent {

  @Input() formArray: IFormArray<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionContactDto>;
  @Input() submitAttemptMade: boolean;

  filtered() {
    let items = this.formArray.formArray.controls.filter(c => !((c as FormGroup).controls['deleted'].value));
    return items as FormGroup[];
  }

  constructor(private modalService: ModalService,
    private emailDistributionContactFormModel: EmailDistributionContactFormModel,
    private dataAccessService: DataAccessService
  ) {
  }

  remove(item: FormGroup) {
    this.modalService.confirm({
      title: 'Confirm Deletion',
      body: `Confirm deletion ${(item.controls['contact'] as FormGroup).controls['communicationEmailAddress'].value}`,
      confirmCallback: () => {
        this.emailDistributionContactFormModel.softOrHardDeleteFromArray(this.formArray, item);
      }
    });
  }

  async add() {

    let idsToExclude = (this.filtered()).map(f => (f.controls['contact'] as FormGroup).controls['id'].value as number);

    let idsToAdd = await this.modalService.contactSelect({
      idsToExclude: idsToExclude
    });

    if (idsToAdd !== undefined) {
      this.modalService.turnOnLoading();
      for (let i = 0; i < idsToAdd.length; i++) {
        let current = idsToAdd[i];
        let contact = await this.dataAccessService.get<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionContactListItemDto>('contact/foremaildistribution', { id: current });
        if (StringHelper.isNotNullOrWhiteSpace(contact.communicationEmailAddress)) {
          let newitem = this.emailDistributionContactFormModel.getNewRowItem();
          (newitem.form.controls['contact'] as FormGroup).controls['name'].setValue(contact.name);
          (newitem.form.controls['contact'] as FormGroup).controls['id'].setValue(current);
          (newitem.form.controls['contact'] as FormGroup).controls['outletName'].setValue(contact.outletName);
          (newitem.form.controls['contact'] as FormGroup).controls['communicationEmailAddress'].setValue(contact.communicationEmailAddress);
          this.emailDistributionContactFormModel.addRowItem(this.formArray, newitem);
        }
      }
      this.modalService.turnOffLoading();
    }


  }

}
