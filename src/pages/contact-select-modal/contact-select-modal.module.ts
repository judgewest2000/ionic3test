import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactSelectModal } from './contact-select-modal';

@NgModule({
  declarations: [
    ContactSelectModal,
  ],
  imports: [
    IonicPageModule.forChild(ContactSelectModal),
  ],
  exports: [
    ContactSelectModal
  ]
})
export class ContactSelectModalModule {}
