import { FormControlsModule } from './../../formcontrols/formcontrols.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactSelect } from './contact-select';

@NgModule({
  declarations: [
    ContactSelect,
  ],
  imports: [
    IonicPageModule.forChild(ContactSelect),
    FormControlsModule
  ],
  exports: [
    ContactSelect
  ]
})
export class ContactSelectModule { }
