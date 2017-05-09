import { IArray } from './../modelinterfaces/base';
import { FormArray } from '@angular/forms/forms';
import { FormBuilder } from '@angular/forms'

export abstract class BaseFormModel<T> {

    constructor(private params: {
        formBuilder: FormBuilder,
        formDefinition: { [key: string]: any },
        complexMapper?: { [key: string]: BaseFormModel<any> }
    }) { }

    create(viewModel: T) {

        // http://stackoverflow.com/questions/6860853/generate-random-string-for-div-id
        function guidGenerator() {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        }

        viewModel['___uuid'] = guidGenerator();

        this.params.formDefinition.___uuid = [''];

        let myForm = this.params.formBuilder.group(this.params.formDefinition);

        myForm.patchValue(viewModel);

        if (this.params.complexMapper !== undefined) {
            Object.keys(this.params.complexMapper).forEach(prop => {

                if (Array.isArray(myForm.getRawValue()[prop])) {
                    let itemsToAdd = viewModel[prop].map(rec => this.params.complexMapper[prop].create(rec)) as any[];
                    for (let i = 0; i < itemsToAdd.length; i++) {
                        (myForm.controls[prop] as FormArray).controls.push(itemsToAdd[i]);
                    }
                } else {
                    myForm.controls[prop] = this.params.complexMapper[prop].create(viewModel[prop]);
                }

            });
        }

        return myForm;
    }

    addNewRow(arr: IArray<T>) {
        
    }
}
