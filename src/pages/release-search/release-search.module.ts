import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReleaseSearch } from './release-search';

//NOTE YOU'LL NEED TO ADD THIS MODULE TO EACH AND EVERY PAGE THAT REQUIRES THE COMPONENTS
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ReleaseSearch,
  ],
  imports: [
    IonicPageModule.forChild(ReleaseSearch),
    ComponentsModule
  ],
  exports: [
    ReleaseSearch
  ]
})
export class ReleaseSearchModule { }
