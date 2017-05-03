import { NgModule } from '@angular/core';
import { CustomSpinnerModule } from './custom-spinner/custom-spinner.module';
import { FormcontrolRichtextModule } from './formcontrol-richtext/formcontrol-richtext.module';
import { FormcontrolTextModule } from './formcontrol-text/formcontrol-text.module';
import { IonicModule } from 'ionic-angular';

@NgModule({
    imports: [
        IonicModule,
        CustomSpinnerModule,
        FormcontrolRichtextModule,
        FormcontrolTextModule
    ],
    exports: [
        CustomSpinnerModule,
        FormcontrolRichtextModule,
        FormcontrolTextModule
    ]
})
export class ComponentsModule { }
