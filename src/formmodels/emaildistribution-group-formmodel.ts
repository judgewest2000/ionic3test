import { ListItemFormModel } from './listitem-formmodel';
import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BaseFormModel } from "./base-formmodel";

@Injectable()
export class EmailDistributionGroupFormModel extends BaseFormModel<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionGroupDto>  {

    constructor(
        listItemFormModel: ListItemFormModel,
        formBuilder: FormBuilder) {
        super({
            formBuilder: formBuilder,
            formDefinition: () => ({
                id: [0],
                deleted: [false],
                group: formBuilder.group({})
            }),
            templateName: 'emaildistributiongroup',
            complexMapper: {
                group: listItemFormModel
            }
        })
    }

}