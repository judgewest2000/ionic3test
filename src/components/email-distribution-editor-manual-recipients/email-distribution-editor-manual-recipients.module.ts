import { FormControlsModule } from './../../formcontrols/formcontrols.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailDistributionEditorManualRecipients } from './email-distribution-editor-manual-recipients';

@NgModule({
  declarations: [
    EmailDistributionEditorManualRecipients,
  ],
  imports: [
    IonicPageModule.forChild(EmailDistributionEditorManualRecipients),
    FormControlsModule
  ],
  exports: [
    EmailDistributionEditorManualRecipients
  ]
})
export class EmailDistributionEditorManualRecipientsModule {}
