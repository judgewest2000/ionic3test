import { EmailDistributionEditorOutletsComponent } from './email-distribution-editor-outlets';
import { FormControlsModule } from './../../formcontrols/formcontrols.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    EmailDistributionEditorOutletsComponent
  ],
  imports: [
    IonicPageModule.forChild(EmailDistributionEditorOutletsComponent),
    FormControlsModule
  ],
  exports: [
    EmailDistributionEditorOutletsComponent
  ]
})
export class EmailDistributionEditorOutletsComponentModule {}
