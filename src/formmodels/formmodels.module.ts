import { NgModule } from '@angular/core';

import { ReleaseFormModel } from './release-formmodel';
import { EmailDistributionFormModel } from './emaildistribution-formmodel';

@NgModule({
    providers: [
        ReleaseFormModel,
        EmailDistributionFormModel
    ]
})
export class FormModelsModule { }
