import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactViewPage } from './contact-view';

@NgModule({
  declarations: [
    ContactViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactViewPage),
  ],
  exports: [
    ContactViewPage
  ]
})
export class ContactViewPageModule {}
