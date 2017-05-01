import { FormBuilder } from '@angular/forms'

export abstract class BaseFormModel<T extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase> {

    constructor(private params: {
        formBuilder: FormBuilder,
        formDefinition: { [key: string]: any }
    }) {

    }

    public create(viewModel: T) {

        const myForm = this.params.formBuilder.group(this.params.formDefinition);

        myForm.setValue(viewModel);

        return myForm;
    }
}
