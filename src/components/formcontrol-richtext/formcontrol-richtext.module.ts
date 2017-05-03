import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormcontrolRichtext } from './formcontrol-richtext';
import { FormcontrolValidationModule } from '../formcontrol-validation/formcontrol-validation.module';

@NgModule({
  declarations: [
    FormcontrolRichtext,
  ],
  imports: [
    IonicPageModule.forChild(FormcontrolRichtext),
    FormcontrolValidationModule
  ],
  exports: [
    FormcontrolRichtext
  ]
})
export class FormcontrolRichtextModule {}
