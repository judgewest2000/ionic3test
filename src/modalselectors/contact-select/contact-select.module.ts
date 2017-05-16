import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactSelect } from './contact-select';

@NgModule({
  declarations: [
    ContactSelect,
  ],
  imports: [
    IonicPageModule.forChild(ContactSelect),
    ComponentsModule
  ],
  exports: [
    ContactSelect
  ]
})
export class ContactSelectModule { }
