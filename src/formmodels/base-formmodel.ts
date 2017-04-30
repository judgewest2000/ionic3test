
import { IBase } from '../modelinterfaces/IBase';
import { FormBuilder, Validators } from '@angular/forms'

import { Injectable } from '@angular/core';

import { IRelease } from '../modelinterfaces/irelease';


export abstract class BaseFormModel<T extends IBase> {

    constructor(public formBuilder: FormBuilder) { }

    protected abstract formDefinition: { [key: string]: any; };

    public create(viewModel: T) {

        const myForm = this.formBuilder.group(this.formDefinition);

        myForm.setValue(viewModel);

        return myForm;
    }
}
