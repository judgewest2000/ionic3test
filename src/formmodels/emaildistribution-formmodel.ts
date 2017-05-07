import { Injectable } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms'

import { BaseFormModel } from './base-formmodel'

@Injectable()
export class EmailDistributionFormModel extends BaseFormModel<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionDto> {

    constructor(formBuilder: FormBuilder) {
        super({
            formBuilder: formBuilder,
            formDefinition: {
                greetingPrefix: [''],
                greetingSuffix: [''],

                sendFromEmailPrefix: ['', Validators.required],
                sendFromEmailDomain: ['', Validators.required],
                sendFromReplyToDomain: ['',Validators.required],
                sendFromName: ['', Validators.required]
            }
        });
    }


}

