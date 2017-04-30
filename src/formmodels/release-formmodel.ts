import { Injectable } from '@angular/core';

import { IRelease } from '../modelinterfaces/irelease';

import { FormBuilder, Validators } from '@angular/forms'

import { BaseFormModel } from './base-formmodel'

@Injectable()
export class ReleaseFormModel extends BaseFormModel<IRelease> {

    constructor(formBuilder: FormBuilder) {
        super(formBuilder);
    }

    formDefinition: { [key: string]: any; } = {
        name: ['', Validators.required],
        headline: ['', Validators.required],
        subheading: ['', Validators.required],
        displayDate: ['', Validators.required],
        coreCopy: ['']
    };

}

