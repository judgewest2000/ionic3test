import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactSelectModal } from './contact-select-modal';

import { ContactService } from '../../providers/contact-service';

@NgModule({
  declarations: [
    ContactSelectModal,
  ],
  imports: [
    IonicPageModule.forChild(ContactSelectModal),
  ],
  exports: [
    ContactSelectModal
  ],
  providers: [
    ContactService
  ]
})
export class ContactSelectModalModule { }
