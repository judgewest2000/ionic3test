
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReleaseEdit } from './release-edit';



import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    ReleaseEdit,
  ],
  imports: [
    IonicPageModule.forChild(ReleaseEdit),
    ComponentsModule
  ],
  exports: [
    ReleaseEdit
  ]
})
export class ReleaseEditModule { }
