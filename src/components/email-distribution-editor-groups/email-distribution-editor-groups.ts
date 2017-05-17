import { EmailDistributionGroupFormModel } from './../../formmodels/emaildistribution-group-formmodel';
import { DataAccessService } from './../../providers/data-access-service';
import { FormGroup } from '@angular/forms';
import { IFormArray } from './../../modelinterfaces/base';
import { Component, Input } from '@angular/core';
import { ModalService } from "../../providers/modal-service";

@Component({
  selector: 'email-distribution-editor-groups',
  templateUrl: 'email-distribution-editor-groups.html'
})
export class EmailDistributionEditorGroupsComponent {

  @Input() formArray: IFormArray<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionGroupDto>;
  @Input() submitAttemptMade: boolean;

  filtered() {
    let items = this.formArray.formArray.controls.filter(c => !((c as FormGroup).controls.deleted.value));
    return items as FormGroup[];
  }

  constructor(private modalService: ModalService,
    private emailDistributionGroupFormModel: EmailDistributionGroupFormModel,
    private dataAccessService: DataAccessService
  ) {
  }

  remove(item: FormGroup) {
    this.modalService.confirm({
      title: 'Confirm Deletion',
      body: `Confirm deletion ${(item.controls.group as FormGroup).controls.name.value}`,
      confirmCallback: () => {
        this.emailDistributionGroupFormModel.softOrHardDeleteFromArray(this.formArray, item);
      }
    });
  }

  async add() {

    let idsToExclude = (this.filtered()).map(f => (f.controls.group as FormGroup).controls.id.value as number);

    let idsToAdd = await this.modalService.groupSelect({
      idsToExclude: idsToExclude
    });

    if (idsToAdd !== undefined) {
      this.modalService.turnOnLoading();
      for (let i = 0; i < idsToAdd.length; i++) {
        let current = idsToAdd[i];
        let group = await this.dataAccessService.get<AIMC.Baltic.Dto.MediaDatabase.ListItemDto>('group/listitem', { id: current });

        let newitem = this.emailDistributionGroupFormModel.getNewRowItem();
        (newitem.form.controls.group as FormGroup).controls.name.setValue(group.name);
        (newitem.form.controls.group as FormGroup).controls.id.setValue(current);
        this.emailDistributionGroupFormModel.addRowItem(this.formArray, newitem);
      }
      this.modalService.turnOffLoading();
    }


  }

}
