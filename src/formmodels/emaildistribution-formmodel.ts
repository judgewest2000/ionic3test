import { EmailDistributionGroupFormModel } from './emaildistribution-group-formmodel';
import { EmailDistributionOutletFormModel } from './emaildistribution-outlet-formmodel';
import { EmailDistributionContactFormModel } from './emaildistribution-contact-formmodel';
import { EmailDistributionManualRecipientFormModel } from './emaildistribution-manualrecipient-formmodel';

import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { BaseFormModel } from './base-formmodel'


@Injectable()
export class EmailDistributionFormModel extends BaseFormModel<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionDto> {

    constructor(formBuilder: FormBuilder,
        emailDistributionManualRecipientFormModel: EmailDistributionManualRecipientFormModel,
        emailDistributionContactFormModel: EmailDistributionContactFormModel,
        emailDistributionOutletFormModel: EmailDistributionOutletFormModel,
        emailDistributionGroupFormModel: EmailDistributionGroupFormModel
    ) {
        super({
            formBuilder: formBuilder,
            formDefinition: () => ({
                id: [0],
                greetingPrefix: [''],
                greetingSuffix: [''],

                sendFromEmailPrefix: ['', Validators.required],
                sendFromEmailDomain: ['', Validators.required],
                sendFromReplyToDomain: ['', Validators.required],
                sendFromName: ['', Validators.required],

                release: formBuilder.group({
                    id: [0],
                    name: ['']
                }),

                manualRecipients: formBuilder.array([]),
                contacts: formBuilder.array([]),
                outlets: formBuilder.array([]),
                groups: formBuilder.array([])
            }),
            complexMapper: {
                manualRecipients: emailDistributionManualRecipientFormModel,
                contacts: emailDistributionContactFormModel,
                outlets: emailDistributionOutletFormModel,
                groups: emailDistributionGroupFormModel
            },
            templateName: 'emaildistribution'
        });
    }


}

