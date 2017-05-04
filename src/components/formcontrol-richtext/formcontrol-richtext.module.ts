import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormcontrolRichtext } from './formcontrol-richtext';
import { FormcontrolValidationModule } from '../formcontrol-validation/formcontrol-validation.module';

import { TinymceModule } from 'angular2-tinymce';

//NOT PUTTING THIS IN THE MAIN BUNDLE OF COMPONENTS.MODULE.TS AS IT'S CURRENTLY CARRYING TINYMCE
//IT'LL NEED ADDING TO THE PAGE DIRECTLY
@NgModule({
  declarations: [
    FormcontrolRichtext,
  ],
  imports: [
    IonicPageModule.forChild(FormcontrolRichtext),
    FormcontrolValidationModule,
     TinymceModule.withConfig({
            menu: {
            },
            formats: {
                'alignleft': { 'selector': 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', attributes: { "align": 'left' } },
                'aligncenter': { 'selector': 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', attributes: { "align": 'center' } },
                'alignright': { 'selector': 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', attributes: { "align": 'right' } },
                'alignfull': { 'selector': 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', attributes: { "align": 'justify' } }
            },
            toolbar: ['undo redo | styleselect | bold italic'],
        }),
  ],
  exports: [
    FormcontrolRichtext
  ]
})
export class FormcontrolRichtextModule { }
