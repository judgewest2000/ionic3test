import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormcontrolRichtext } from './formcontrol-richtext';

@NgModule({
  declarations: [
    FormcontrolRichtext,
  ],
  imports: [
    IonicPageModule.forChild(FormcontrolRichtext),
  ],
  exports: [
    FormcontrolRichtext
  ]
})
export class FormcontrolRichtextModule {}
