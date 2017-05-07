import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailDistributionEdit } from './email-distribution-edit';

@NgModule({
  declarations: [
    EmailDistributionEdit,
  ],
  imports: [
    IonicPageModule.forChild(EmailDistributionEdit),
    ComponentsModule
  ],
  exports: [
    EmailDistributionEdit
  ]
})
export class EmailDistributionEditModule {}
