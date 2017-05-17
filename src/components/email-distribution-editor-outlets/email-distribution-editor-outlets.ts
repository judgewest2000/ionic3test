import { DataAccessService } from './../../providers/data-access-service';
import { EmailDistributionOutletFormModel } from './../../formmodels/emaildistribution-outlet-formmodel';
import { FormGroup } from '@angular/forms';
import { IFormArray } from './../../modelinterfaces/base';
import { Component, Input } from '@angular/core';
import { ModalService } from "../../providers/modal-service";
import { StringHelper } from "../../helpers/string-helper";

@Component({
  selector: 'email-distribution-editor-outlets',
  templateUrl: 'email-distribution-editor-outlets.html'
})
export class EmailDistributionEditorOutletsComponent {

  @Input() formArray: IFormArray<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionOutletDto>;
  @Input() submitAttemptMade: boolean;

  filtered() {
    let items = this.formArray.formArray.controls.filter(c => !((c as FormGroup).controls['deleted'].value));
    return items as FormGroup[];
  }

  constructor(private modalService: ModalService,
    private emailDistributionOutletFormModel: EmailDistributionOutletFormModel,
    private dataAccessService: DataAccessService
  ) {
  }

  remove(item: FormGroup) {
    this.modalService.confirm({
      title: 'Confirm Deletion',
      body: `Confirm deletion ${(item.controls['outlet'] as FormGroup).controls['communicationEmailAddress'].value}`,
      confirmCallback: () => {
        this.emailDistributionOutletFormModel.softOrHardDeleteFromArray(this.formArray, item);
      }
    });
  }

  async add() {

    let idsToExclude = (this.filtered()).map(f => (f.controls['outlet'] as FormGroup).controls['id'].value as number);

    let idsToAdd = await this.modalService.outletSelect({
      idsToExclude: idsToExclude
    });

    if (idsToAdd !== undefined) {
      this.modalService.turnOnLoading();
      for (let i = 0; i < idsToAdd.length; i++) {
        let current = idsToAdd[i];
        let outlet = await this.dataAccessService.get<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionOutletListItemDto>('outlet/foremaildistribution', { id: current });
        if (StringHelper.isNotNullOrWhiteSpace(outlet.communicationEmailAddress)) {
          let newitem = this.emailDistributionOutletFormModel.getNewRowItem();
          (newitem.form.controls['outlet'] as FormGroup).controls['name'].setValue(outlet.name);
          (newitem.form.controls['outlet'] as FormGroup).controls['id'].setValue(current);
          (newitem.form.controls['outlet'] as FormGroup).controls['communicationEmailAddress'].setValue(outlet.communicationEmailAddress);
          this.emailDistributionOutletFormModel.addRowItem(this.formArray, newitem);
        }
      }
      this.modalService.turnOffLoading();
    }


  }

}
