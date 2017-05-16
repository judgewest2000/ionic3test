import { FormGroup } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
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

  form: FormGroup;

  constructor(private viewController: ViewController) {
    
  }

  close(){
    this.viewController.dismiss();
  }

  ionViewDidLoad() {
    var form =  this.viewController.getNavParams().get('params') as FormGroup;
  }

}
