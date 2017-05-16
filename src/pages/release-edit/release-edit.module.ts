import { FormControlsModule } from './../../formcontrols/formcontrols.module';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReleaseEdit } from './release-edit';



@NgModule({
  declarations: [
    ReleaseEdit,
  ],
  imports: [
    IonicPageModule.forChild(ReleaseEdit),
    FormControlsModule
  ],
  exports: [
    ReleaseEdit
  ]
})
export class ReleaseEditModule { }
