import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JamesSpecial } from './james-special';

@NgModule({
  declarations: [
    JamesSpecial,
  ],
  imports: [
      IonicPageModule.forChild(JamesSpecial),
  ],
  exports: [
    JamesSpecial
  ]
})
export class JamesSpecialModule {}
