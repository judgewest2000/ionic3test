import { NgModule } from '@angular/core';
import { CustomSpinnerModule } from './custom-spinner/custom-spinner.module';
import { FormcontrolTextModule } from './formcontrol-text/formcontrol-text.module';
import { FormcontrolDateModule } from './formcontrol-date/formcontrol-date.module';
import { IonicModule } from 'ionic-angular';

@NgModule({
    imports: [
        IonicModule,
        CustomSpinnerModule,
        FormcontrolTextModule,
        FormcontrolDateModule
    ],
    exports: [
        CustomSpinnerModule,
        FormcontrolTextModule,
        FormcontrolDateModule
    ]
})
export class ComponentsModule { }
