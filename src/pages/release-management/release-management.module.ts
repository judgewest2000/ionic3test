import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReleaseManagement } from './release-management';

@NgModule({
  declarations: [
    ReleaseManagement,
  ],
  imports: [
    IonicPageModule.forChild(ReleaseManagement),
  ],
  exports: [
    ReleaseManagement
  ]
})

export class ReleaseManagementModule {

}
