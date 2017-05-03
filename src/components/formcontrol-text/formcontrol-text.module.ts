import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormcontrolText } from './formcontrol-text';

@NgModule({
  declarations: [
    FormcontrolText,
  ],
  imports: [
    IonicPageModule.forChild(FormcontrolText),
  ],
  exports: [
    FormcontrolText
  ]
})
export class FormcontrolTextModule {}
