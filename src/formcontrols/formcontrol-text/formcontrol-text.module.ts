import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormcontrolText } from './formcontrol-text';
import { FormcontrolValidationModule } from '../formcontrol-validation/formcontrol-validation.module';

@NgModule({
  declarations: [
    FormcontrolText,
  ],
  imports: [
    IonicPageModule.forChild(FormcontrolText),
    FormcontrolValidationModule
  ],
  exports: [
    FormcontrolText
  ]
})
export class FormcontrolTextModule { }
