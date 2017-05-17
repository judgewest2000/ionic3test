import { IFormArray, IForm } from './../modelinterfaces/base';
import { FormArray } from '@angular/forms/forms';
import { FormBuilder, FormGroup } from '@angular/forms'
import { TemplateGetHelper } from "../helpers/template-helper";

export abstract class BaseFormModel<T> {

    constructor(private params: {
        formBuilder: FormBuilder,
        //formDefinition: { [key: string]: any },
        formDefinition: () => { [key: string]: any },
        complexMapper?: { [key: string]: BaseFormModel<any> },
        templateName: string
    }) { }

    create(viewModel: T) {
        // http://stackoverflow.com/questions/6860853/generate-random-string-for-div-id
        function guidGenerator() {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        }

        let formDefinition = this.params.formDefinition();

        viewModel['___uuid'] = guidGenerator();

        formDefinition.___uuid = [];

        let myForm = this.params.formBuilder.group(formDefinition);

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

    getNewRowItem() {
        let rawViewModel = TemplateGetHelper<T>(this.params.templateName);
        let form = this.create(rawViewModel);

        return <IForm<T>>{
            form: form,
            viewModel: rawViewModel
        };
    }

    addRowItem(arr: IFormArray<T>, item: IForm<T>) {
        arr.array.push(item.viewModel);
        arr.formArray.controls.push(item.form);
    }

    getItemFromArray(arr: IFormArray<T>, item: FormGroup) {
        let uuid = item.controls['___uuid'].value;
        let viewModel = arr.array.filter(a => a['___uuid'] === uuid)[0];

        return <IForm<T>>{
            form: item,
            viewModel: viewModel
        };
    }

    softOrHardDeleteFromArray(arr: IFormArray<T>, item: FormGroup) {

        if (item.controls['id'].value !== 0) {
            item.controls['deleted'].setValue(true);
        } else {
            let uuid = item.controls['___uuid'].value;

            for (let i = 0; i < arr.formArray.controls.length; i++) {
                let current = arr.formArray.controls[i] as FormGroup;
                if (current.controls['___uuid'].value === uuid) {
                    arr.formArray.controls.splice(i, 1);
                    break;
                }
            }

            for (let i = 0; i < arr.array.length; i++) {
                let current = arr.array[i];
                if (current['___uuid'] === uuid) {
                    arr.array.splice(i, 1);
                    break;
                }
            }
        }



    }
}
