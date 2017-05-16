import { FormControl } from '@angular/forms';
import { IForm, IFormControlDefinition } from './../../modelinterfaces/base';
import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { BaseModalEdit } from "../base-modal-edit/base-modal-edit";

/**
 * Generated class for the EmailDistributionEditorManualRecipientEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-email-distribution-editor-manual-recipient-edit',
  templateUrl: 'email-distribution-editor-manual-recipient-edit.html',
})
export class EmailDistributionEditorManualRecipientEditPage extends BaseModalEdit<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionManualRecipientDto>{

  constructor(viewController: ViewController) {
    super({viewController: viewController});
  }


}
