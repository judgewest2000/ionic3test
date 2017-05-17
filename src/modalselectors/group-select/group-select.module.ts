import { GroupSelect } from './group-select';
import { FormControlsModule } from './../../formcontrols/formcontrols.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    GroupSelect,
  ],
  imports: [
    IonicPageModule.forChild(GroupSelect),
    FormControlsModule
  ],
  exports: [
    GroupSelect
  ]
})
export class GroupSelectModule { }
