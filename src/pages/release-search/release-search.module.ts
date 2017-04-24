import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReleaseSearch } from './release-search';

@NgModule({
  declarations: [
    ReleaseSearch,
  ],
  imports: [
    IonicPageModule.forChild(ReleaseSearch),
  ],
  exports: [
    ReleaseSearch
  ]
})
export class ReleaseSearchModule {}
