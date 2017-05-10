import { Injectable } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms'

import { BaseFormModel } from './base-formmodel'

@Injectable()
export class ReleaseFormModel extends BaseFormModel<AIMC.Baltic.Dto.MediaDatabase.ReleaseDto> {

    constructor(formBuilder: FormBuilder) {
        super({
            formBuilder: formBuilder,
            formDefinition: () => ({
                name: ['', Validators.compose([Validators.required])],
                headline: ['', Validators.required],
                subheading: [''],
                displayDateTime: ['', Validators.required],
                scheduledDateTime: ['', Validators.required],
                coreCopy: [''],
                notesToEditor: [''],
                boilerPlate: ['']
            }),
            templateName: 'release'
        });
    }


}

