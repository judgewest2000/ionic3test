import { EmailDistributionEditorGroupsComponent } from './email-distribution-editor-groups';

import { FormControlsModule } from './../../formcontrols/formcontrols.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    EmailDistributionEditorGroupsComponent
  ],
  imports: [
    IonicPageModule.forChild(EmailDistributionEditorGroupsComponent),
    FormControlsModule
  ],
  exports: [
    EmailDistributionEditorGroupsComponent
  ]
})
export class EmailDistributionEditorGroupsComponentModule {}
