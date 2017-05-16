import { FormControlsModule } from './../../formcontrols/formcontrols.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactSearch } from './contact-search';

@NgModule({
  declarations: [
    ContactSearch,
  ],
  imports: [
    IonicPageModule.forChild(ContactSearch),
    FormControlsModule
  ],
  exports: [
    ContactSearch
  ]
})
export class ContactSearchModule {}
