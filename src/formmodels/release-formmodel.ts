import { Injectable } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms'

import { BaseFormModel } from './base-formmodel'

@Injectable()
export class ReleaseFormModel extends BaseFormModel<AIMC.Baltic.Dto.MediaDatabase.ReleaseDto> {

    constructor(formBuilder: FormBuilder) {
        super({
            formBuilder: formBuilder,
            formDefinition: {
                name: ['', Validators.required],
                headline: ['', Validators.required],
                subheading: ['', Validators.required],
                displayDateTime: ['', Validators.required],
                coreCopy: [''],
                notesToEditor: [''],
                boilerPlate: ['']
            }
        });
    }


}

