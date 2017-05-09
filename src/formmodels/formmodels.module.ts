import { EmailDistributionManualRecipientFormModel } from './emaildistribution-manualrecipient-formmodel';

import { NgModule } from '@angular/core';

import { ReleaseFormModel } from './release-formmodel';
import { EmailDistributionFormModel } from './emaildistribution-formmodel';

@NgModule({
    providers: [
        ReleaseFormModel,
        EmailDistributionFormModel,
        EmailDistributionManualRecipientFormModel
    ]
})
export class FormModelsModule { }
