import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BaseFormModel } from "./base-formmodel";

@Injectable()
export class EmailDistributionManualRecipientFormModel extends BaseFormModel<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionManualRecipientDto>  {

    constructor(formBuilder: FormBuilder) {
        super({
            formBuilder: formBuilder,
            formDefinition: () =>  ({
                id: [0],
                deleted: [false],
                salutation: [''],
                firstName: [''],
                lastName: [''],
                emailAddress: ['', Validators.email ]
            }),
            templateName: 'emaildistributionmanualrecipient'
        })
    }

}