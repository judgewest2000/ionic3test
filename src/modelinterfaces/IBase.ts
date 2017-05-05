import { FormGroup, FormControl } from '@angular/forms';

export interface IForm<T extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase> {
    viewModel: T,
    form: FormGroup
}

export interface ISearch {
    id: number;
    name: string;
    description1?: string;
    description2?: string;
    description3?: string;
    avatarUrl?: string;
}

export interface IFormControlDefinition {
    title: string;
    formControlItem: FormControl;
    submitAttemptMade: boolean;
};

