import { EmailDistributionGroupFormModel } from './emaildistribution-group-formmodel';
import { ListItemFormModel } from './listitem-formmodel';
import { EmailDistributionOutletFormModel, EmailDistributionOutletListItemFormModel } from './emaildistribution-outlet-formmodel';
import { EmailDistributionContactFormModel, EmailDistributionContactListItemFormModel } from './emaildistribution-contact-formmodel';
import { EmailDistributionManualRecipientFormModel } from './emaildistribution-manualrecipient-formmodel';

import { NgModule } from '@angular/core';

import { ReleaseFormModel } from './release-formmodel';
import { EmailDistributionFormModel } from './emaildistribution-formmodel';

@NgModule({
    providers: [
        ListItemFormModel,
        ReleaseFormModel,
        EmailDistributionFormModel,
        EmailDistributionManualRecipientFormModel,
        EmailDistributionContactFormModel,
        EmailDistributionContactListItemFormModel,
        EmailDistributionOutletFormModel,
        EmailDistributionOutletListItemFormModel,
        EmailDistributionGroupFormModel
    ]
})
export class FormModelsModule { }
