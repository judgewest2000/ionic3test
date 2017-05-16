import { FormControlsModule } from './../../formcontrols/formcontrols.module';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailDistributionEditorManualRecipientEditPage } from './email-distribution-editor-manual-recipient-edit';

@NgModule({
  declarations: [
    EmailDistributionEditorManualRecipientEditPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailDistributionEditorManualRecipientEditPage),
    FormControlsModule
  ],
  exports: [
    EmailDistributionEditorManualRecipientEditPage
  ]
})
export class EmailDistributionEditorManualRecipientEditPageModule {}
