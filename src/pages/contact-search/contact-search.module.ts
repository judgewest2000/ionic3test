import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactSearch } from './contact-search';

@NgModule({
  declarations: [
    ContactSearch,
  ],
  imports: [
    IonicPageModule.forChild(ContactSearch),
    ComponentsModule
  ],
  exports: [
    ContactSearch
  ]
})
export class ContactSearchModule {}
