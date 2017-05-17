import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BaseFormModel } from "./base-formmodel";

@Injectable()
export class ListItemFormModel extends BaseFormModel<AIMC.Baltic.Dto.MediaDatabase.ListItemDto>{

    constructor(formBuilder: FormBuilder) {
        super({
            formBuilder: formBuilder,
            formDefinition: () => ({
                id: [0],
                name: ['']
            }),
            templateName: 'listitem'
        });
    }

}