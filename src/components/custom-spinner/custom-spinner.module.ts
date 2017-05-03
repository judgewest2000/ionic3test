import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CustomSpinner } from './custom-spinner';


@NgModule({
  declarations: [
    CustomSpinner
  ],
  imports: [
    IonicPageModule.forChild(CustomSpinner)
  ],
  exports: [
    CustomSpinner
  ]
})
export class CustomSpinnerModule { }