import { NgModule } from '@angular/core';
import { CustomSpinner } from './custom-spinner/custom-spinner';

import { IonicModule } from 'ionic-angular';

@NgModule({
    imports:[
        IonicModule
    ],
    declarations: [
        CustomSpinner
    ],
    exports: [
        CustomSpinner
    ]
})
export class ComponentsModule { }
