import { FormControlsModule } from './../../formcontrols/formcontrols.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutletSelect } from './outlet-select';

@NgModule({
  declarations: [
    OutletSelect,
  ],
  imports: [
    IonicPageModule.forChild(OutletSelect),
    FormControlsModule
  ],
  exports: [
    OutletSelect
  ]
})
export class OutletSelectModule { }
