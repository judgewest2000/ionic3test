import { FormControlsModule } from './../../formcontrols/formcontrols.module';
import { EmailDistributionEditorManualRecipientsModule } from './../../components/email-distribution-editor-manual-recipients/email-distribution-editor-manual-recipients.module';


import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailDistributionEdit } from './email-distribution-edit';


@NgModule({
  declarations: [
    EmailDistributionEdit,
  ],
  imports: [
    IonicPageModule.forChild(EmailDistributionEdit),
    FormControlsModule,
    EmailDistributionEditorManualRecipientsModule
    ],
  exports: [
    EmailDistributionEdit
  ]
})
export class EmailDistributionEditModule { }
