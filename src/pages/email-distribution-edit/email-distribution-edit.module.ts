import { EmailDistributionEditorOutletsComponentModule } from './../../components/email-distribution-editor-outlets/email-distribution-editor-outlets.module';
import { EmailDistributionEditorContactsComponentModule } from './../../components/email-distribution-editor-contacts/email-distribution-editor-contacts.module';
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
    EmailDistributionEditorManualRecipientsModule,
    EmailDistributionEditorContactsComponentModule,
    EmailDistributionEditorOutletsComponentModule
    ],
  exports: [
    EmailDistributionEdit
  ]
})
export class EmailDistributionEditModule { }
