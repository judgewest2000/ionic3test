import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReleaseEdit } from './release-edit';

import { ComponentsModule } from '../../components/components.module';
import { FormcontrolRichtextModule } from '../../components/formcontrol-richtext/formcontrol-richtext.module';


@NgModule({
  declarations: [
    ReleaseEdit,
  ],
  imports: [
    IonicPageModule.forChild(ReleaseEdit),
    ComponentsModule,
    FormcontrolRichtextModule
  ],
  exports: [
    ReleaseEdit
  ]
})
export class ReleaseEditModule { }
