import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormcontrolDate } from './formcontrol-date';
import { FormcontrolValidationModule } from '../formcontrol-validation/formcontrol-validation.module';

@NgModule({
  declarations: [
    FormcontrolDate,
  ],
  imports: [
    IonicPageModule.forChild(FormcontrolDate),
    FormcontrolValidationModule
  ],
  exports: [
    FormcontrolDate
  ]
})
export class FormcontrolDateModule {}
