import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormcontrolRichtext } from './formcontrol-richtext';
import { FormcontrolValidationModule } from '../formcontrol-validation/formcontrol-validation.module';


//NOT PUTTING THIS IN THE MAIN BUNDLE OF COMPONENTS.MODULE.TS AS IT'S CURRENTLY CARRYING TINYMCE
//IT'LL NEED ADDING TO THE PAGE DIRECTLY
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
export class FormcontrolRichtextModule { }
