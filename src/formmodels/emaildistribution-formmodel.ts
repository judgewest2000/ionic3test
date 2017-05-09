import { EmailDistributionManualRecipientFormModel } from './emaildistribution-manualrecipient-formmodel';

import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { BaseFormModel } from './base-formmodel'


@Injectable()
export class EmailDistributionFormModel extends BaseFormModel<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionDto> {

    constructor(formBuilder: FormBuilder,
    emailDistributionManualRecipientFormModel: EmailDistributionManualRecipientFormModel
    ) {
        super({
            formBuilder: formBuilder,
            formDefinition: {
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

                manualRecipients: formBuilder.array([])
            },
            complexMapper: {
                manualRecipients: emailDistributionManualRecipientFormModel
            }
        });
    }


}

