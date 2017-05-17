import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BaseFormModel } from "./base-formmodel";

@Injectable()
export class EmailDistributionContactListItemFormModel extends BaseFormModel<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionContactListItemDto>{

    constructor(formBuilder: FormBuilder) {
        super({
            formBuilder: formBuilder,
            formDefinition: () => ({
                id: [0],
                deleted: [false],
                outletName: [''],
                name: [''],
                communicationEmailAddress: ['']
            }),
            templateName: 'emaildistributioncontactlistitem'
        });
    }

}

@Injectable()
export class EmailDistributionContactFormModel extends BaseFormModel<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionContactDto>  {

    constructor(
        emailDistributionContactListItemFormModel: EmailDistributionContactListItemFormModel,
        formBuilder: FormBuilder) {
        super({
            formBuilder: formBuilder,
            formDefinition: () => ({
                id: [0],
                deleted: [false],
                contact: formBuilder.group({})
            }),
            templateName: 'emaildistributioncontact',
            complexMapper: {
                contact: emailDistributionContactListItemFormModel
            }
        })
    }

}