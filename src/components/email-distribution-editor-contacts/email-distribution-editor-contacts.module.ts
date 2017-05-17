import { FormControlsModule } from './../../formcontrols/formcontrols.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailDistributionEditorContactsComponent } from './email-distribution-editor-contacts';

@NgModule({
  declarations: [
    EmailDistributionEditorContactsComponent,
  ],
  imports: [
    IonicPageModule.forChild(EmailDistributionEditorContactsComponent),
    FormControlsModule
  ],
  exports: [
    EmailDistributionEditorContactsComponent
  ]
})
export class EmailDistributionEditorContactsComponentModule {}
