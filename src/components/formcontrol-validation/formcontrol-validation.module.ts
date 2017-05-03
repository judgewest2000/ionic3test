import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormcontrolValidation } from './formcontrol-validation';

@NgModule({
  declarations: [
    FormcontrolValidation,
  ],
  imports: [
    IonicPageModule.forChild(FormcontrolValidation),
  ],
  exports: [
    FormcontrolValidation
  ]
})
export class FormcontrolValidationModule {}
