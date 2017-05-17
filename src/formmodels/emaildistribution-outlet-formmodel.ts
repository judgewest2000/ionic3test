import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BaseFormModel } from "./base-formmodel";

@Injectable()
export class EmailDistributionOutletListItemFormModel extends BaseFormModel<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionOutletListItemDto>{

    constructor(formBuilder: FormBuilder) {
        super({
            formBuilder: formBuilder,
            formDefinition: () => ({
                id: [0],
                deleted: [false],
                name: [''],
                communicationEmailAddress: ['']
            }),
            templateName: 'emaildistributionoutletlistitem'
        });
    }

}

@Injectable()
export class EmailDistributionOutletFormModel extends BaseFormModel<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionOutletDto>  {

    constructor(
        emailDistributionOutletListItemFormModel: EmailDistributionOutletListItemFormModel,
        formBuilder: FormBuilder) {
        super({
            formBuilder: formBuilder,
            formDefinition: () => ({
                id: [0],
                deleted: [false],
                outlet: formBuilder.group({})
            }),
            templateName: 'emaildistributionoutlet',
            complexMapper: {
                outlet: emailDistributionOutletListItemFormModel
            }
        })
    }

}