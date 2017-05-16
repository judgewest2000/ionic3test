import { IForm } from './../../modelinterfaces/base';
import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

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
export class EmailDistributionEditorManualRecipientEditPage {

  form: IForm<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionManualRecipientDto>;

  constructor(private viewController: ViewController) {

  }

  close() {
    this.viewController.dismiss();
  }

  ionViewDidLoad() {
    this.form = this.viewController.getNavParams().data;
  }

}
